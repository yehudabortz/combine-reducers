import { expect } from "chai";
import sinon from "sinon";
import { configure, shallow, mount } from "enzyme";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../src/App";
import manageAuthorsAndBooks from "../src/reducers/manageAuthorsAndBooks.js";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("store", () => {
  let store;
  it("is correctly initialized when application is mounted", () => {
    store = createStore(manageAuthorsAndBooks);

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(store.getState()).to.deep.equal({ authors: [], books: [] });
  });
});
