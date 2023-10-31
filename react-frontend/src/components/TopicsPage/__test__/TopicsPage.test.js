import React from "react";
import { render, screen } from "@testing-library/react";

import TopicsPage from "../TopicsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders topics page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TopicsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("topics-datatable")).toBeInTheDocument();
    expect(screen.getByRole("topics-add-button")).toBeInTheDocument();
});
