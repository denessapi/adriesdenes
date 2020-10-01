import React from "react";
// Twin macro.
import tw from "twin.macro";
import produce from "immer";
import lscache from "lscache";

import { useRouter } from "next/router";

import Header from "../../components/Header";
import SEO from "../../components/SEO";
import ImageDivider from "../../components/ImageDivider";

import Page from "../../components/shared/Page";
import Container from "../../components/shared/Container";
import LargeText from "../../components/shared/LargeText";
import Story from "../../components/shared/Story";
import SmallText from "../../components/shared/SmallText";

const FormContainer = tw(Container)`
  flex
  flex-col
  md:mx-auto
  lg:w-2/3
  md:w-full
  w-full
`;

const CenteredRow = tw.div`
  mb-10
  self-center
  mx-4
`;

const TextareRow = tw.div`
  mb-10
  self-center
  mx-4
  w-2/3
`;

const Label = tw.label`
  lg:text-xl
  md:text-lg
  text-lg
  text-justify
  font-cardo
  ml-4
`;

const InfoText = tw(SmallText)`
  my-16
`;

const SmallHeader = tw(SmallText)`
  mt-4
  mb-2
`;

const initialState = {
  state: null,
  key: null,
  success: false,
  data: {
    isComing: null,
    comment: null,
    dog: null,
    address: null,
    invite: null,
    guests: [
      {
        name: null,
        age: null,
        intolerance: null
      }
    ]
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "isComing":
    case "comment":
    case "address":
    case "invite":
    case "dog":
      return produce(state, draft => {
        draft.data[action.type] = action.value;
      });
    case "name":
    case "age":
    case "intolerance":
      return produce(state, draft => {
        draft.data.guests[action.index][action.type] = action.value;
      });
    case "addGuest":
      return produce(state, draft => {
        draft.data.guests.push({
          name: null,
          age: null,
          intolerance: null
        });
      });
    case "deleteGuest":
      return produce(state, draft => {
        draft.data.guests.splice(action.index, 1);
      });
    case "server":
      return produce(state, draft => {
        draft.key = action.value.key;
        draft.state =
          action.value.key === null || action.value.key === undefined
            ? "invalid"
            : "valid";
        Object.keys(action.value).forEach(key => {
          draft.data[key] = action.value[key];
        });
      });
    case "error":
    case "success":
      return produce(state, draft => {
        draft.state = action.type;
      });
    case "modify":
      return produce(state, draft => {
        draft.state = null;
      });
    default:
      break;
  }
}

export default function Gyik() {
  const router = useRouter();
  const { code } = router.query;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    async function fetchData() {
      fetch(`/api/rsvp/${code}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          dispatch({ type: "server", value: result });
        })
        .catch(error => {
          dispatch({ type: "error", value: error });
        });
    }
    if (code !== undefined && state.state === null) {
      fetchData();
    }
  }, [code, state.state]);

  React.useEffect(
    function saveStateToLocalStorage() {
      if (state.state === "valid") {
        lscache.set("rsvpCode", code);
      }
    },
    [state.state]
  );

  const handleSave = () => {
    fetch(`/api/rsvp/update`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: state.key,
        value: state.data
      })
    })
      .then(response => {
        if (response.ok) {
          dispatch({ type: "success" });
        } else {
          dispatch({ type: "error" });
        }
      })
      .catch(error => {
        dispatch({ type: "error", value: error });
      });
  };

  return (
    <Page>
      <SEO title="RSVP" />
      <main>
        <Header />
        <ImageDivider />
        <LargeText>RSVP</LargeText>
        {state.state === "success" && (
          <>
            <InfoText>Az adatokat elmentettük, köszönjük a válaszod!</InfoText>
            <FormContainer>
              <CenteredRow>
                <button
                  class={`
                      bg-blue-500 hover:bg-blue-600
                      text-white
                      font-bold px-4 py-2
                      rounded inline-flex items-center`}
                  onClick={() => dispatch({ type: "modify" })}
                >
                  Módosítás
                </button>
              </CenteredRow>
            </FormContainer>
          </>
        )}
        {state.state === null && (
          <InfoText>Adatok lekérdezése folyamatban...</InfoText>
        )}
        {state.state === "invalid" && (
          <InfoText>A megadott link érvénytelen.</InfoText>
        )}
        {state.state === "error" && <InfoText>Hiba történt.</InfoText>}
        {state.state === "valid" && (
          <>
            <Story>
              Kedves {state.data.nickName}, kérjük minél hamarabb, legkésőbb
              2020. október 31-ig adj számunkra egy előzetes visszajelezést,
              hogy ott leszel-e a nagy napon. Ha a későbbiekben másképp
              alakulnak a dolgok, akkor természetesen lesz még lehetőséged
              módosítani rajta. Válaszodat 2021. április 30-ig véglegesítsd!
            </Story>
            <FormContainer>
              <CenteredRow>
                <SmallHeader>Ott leszel?</SmallHeader>

                <div class="my-2">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="yes"
                    id="yes"
                    checked={state.data.isComing === true}
                    onChange={() =>
                      dispatch({
                        type: "isComing",
                        value: true
                      })
                    }
                  />
                  <Label for="yes">Igen, már alig várom</Label>
                </div>
                <div class="my-2">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="no"
                    id="no"
                    checked={state.data.isComing === false}
                    onChange={() =>
                      dispatch({
                        type: "isComing",
                        value: false
                      })
                    }
                  />
                  <Label for="no">Nem tudok jönni</Label>
                </div>
              </CenteredRow>
              {state.data.isComing && (
                <>
                  <SmallHeader>Vendégek</SmallHeader>
                  <div class="md:hidden mx-4">
                    {state.data.guests.map((guest, index) => (
                      <div class="border w-full">
                        <div class="w-full p-2">
                          <Label>Név</Label>
                          <input
                            class="form-input mt-1 block w-full"
                            placeholder="Név"
                            value={guest.name}
                            onChange={event =>
                              dispatch({
                                type: "name",
                                index,
                                value: event.target.value
                              })
                            }
                          />
                        </div>
                        <div class="w-full p-2">
                          <Label>Életkor</Label>
                          <select
                            class="form-select mt-1 block w-full"
                            placeholder="Életkor"
                            value={guest.age}
                            onChange={event =>
                              dispatch({
                                type: "age",
                                index,
                                value: event.target.value
                              })
                            }
                          >
                            <option value="0">Felnőtt</option>
                            <option value="1">Gyerek 4-12 éves</option>
                            <option value="2">Gyerek 0-4 éves</option>
                          </select>
                        </div>
                        <div class="w-full p-2">
                          <Label>Ételérzékenység, egyéb fontos tudnivaló</Label>
                          <input
                            class="form-input mt-1 block w-full"
                            placeholder="Pl. glutén, laktóz"
                            value={guest.intolerance}
                            onChange={event =>
                              dispatch({
                                type: "intolerance",
                                index,
                                value: event.target.value
                              })
                            }
                          />
                        </div>
                        <div class="p-2">
                          <button
                            class="
                              bg-red-500
                              hover:bg-red-600
                              text-white
                              font-bold px-4 py-2
                              rounded inline-flex items-center"
                            onClick={() =>
                              dispatch({
                                type: "deleteGuest",
                                index
                              })
                            }
                          >
                            Töröl
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <table class="table-fixed hidden md:block">
                    <thead>
                      <tr>
                        <th class="w-1/3 px-4 py-2">Név</th>
                        <th class="w-1/4 px-4 py-2">Életkor</th>
                        <th class="w-1/3 px-4 py-2">
                          Ételérzékenység, egyéb fontos tudnivaló
                        </th>
                        <th class="w-1/6 px-4 py-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.data.guests.map((guest, index) => (
                        <tr>
                          <td class="border px-4 py-2">
                            <input
                              class="form-input mt-1 block w-full"
                              placeholder="Név"
                              value={guest.name}
                              onChange={event =>
                                dispatch({
                                  type: "name",
                                  index,
                                  value: event.target.value
                                })
                              }
                            />
                          </td>
                          <td class="border px-4 py-2">
                            <select
                              class="form-select mt-1 block w-full"
                              placeholder="Életkor"
                              value={guest.age}
                              onChange={event =>
                                dispatch({
                                  type: "age",
                                  index,
                                  value: event.target.value
                                })
                              }
                            >
                              <option value="0">Felnőtt</option>
                              <option value="1">Gyerek 3-12 éves</option>
                              <option value="2">Gyerek 0-3 éves</option>
                            </select>
                          </td>
                          <td class="border px-4 py-2">
                            <input
                              class="form-input mt-1 block w-full"
                              placeholder="Pl. glutén, laktóz"
                              value={guest.intolerance}
                              onChange={event =>
                                dispatch({
                                  type: "intolerance",
                                  index,
                                  value: event.target.value
                                })
                              }
                            />
                          </td>
                          <td class="border px-4 py-2">
                            <button
                              class="
                                  bg-red-500
                                  hover:bg-red-600
                                  text-white
                                  font-bold px-4 py-2
                                  rounded inline-flex items-center"
                              onClick={() =>
                                dispatch({
                                  type: "deleteGuest",
                                  index
                                })
                              }
                            >
                              Töröl
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div class="text-center mb-4">
                    <button
                      class="
                          bg-blue-500
                          hover:bg-blue-600
                          text-white
                          font-bold px-4 py-2 my-2
                          rounded inline-flex items-center"
                      onClick={() =>
                        dispatch({
                          type: "addGuest"
                        })
                      }
                    >
                      Új vendég
                    </button>
                  </div>
                  <SmallHeader>Négylábú vendégek</SmallHeader>
                  <TextareRow>
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        class="form-checkbox"
                        id="dog"
                        checked={state.data.dog === true}
                        onChange={event =>
                          dispatch({
                            type: "dog",
                            value: event.target.checked
                          })
                        }
                      />
                      <Label for="dog">Hozom a kutyá(i)m is</Label>
                    </label>
                  </TextareRow>
                </>
              )}
              <SmallHeader>Papír alapú meghívó</SmallHeader>
              <TextareRow>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox"
                    id="invite"
                    checked={state.data.invite === true}
                    onChange={event =>
                      dispatch({
                        type: "invite",
                        value: event.target.checked
                      })
                    }
                  />
                  <Label for="invite">Szeretnék papír alapú meghívót is</Label>
                </label>
              </TextareRow>
              {state.data.invite && (
                <TextareRow>
                  <Label for="address">Erre a címre kérem:</Label>
                  <textarea
                    class="form-textarea mt-1 block w-full"
                    rows="4"
                    id="address"
                    onChange={event =>
                      dispatch({
                        type: "address",
                        value: event.target.value
                      })
                    }
                  >
                    {state.data.address}
                  </textarea>
                </TextareRow>
              )}
              <SmallText>Üzenet, egyéb megjegyzés</SmallText>
              <TextareRow>
                <textarea
                  class="form-textarea mt-1 block w-full"
                  rows="4"
                  id="comment"
                  onChange={event =>
                    dispatch({
                      type: "comment",
                      value: event.target.value
                    })
                  }
                >
                  {state.data.comment}
                </textarea>
              </TextareRow>
              <CenteredRow>
                <button
                  class={`
                  ${
                    state.data.isComing === null
                      ? "cursor-not-allowed bg-gray-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }
                  text-white
                  font-bold px-4 py-2
                  rounded inline-flex items-center`}
                  onClick={() => handleSave()}
                >
                  Mentés
                </button>
              </CenteredRow>
            </FormContainer>
          </>
        )}
        <ImageDivider />
      </main>
    </Page>
  );
}
