import React from "react";
import { render, screen } from "@testing-library/react";

import UserdetailsPage from "../UserdetailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userdetails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserdetailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userdetails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("userdetails-add-button")).toBeInTheDocument();
});
