import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../component/Product";
import * as api from "../api/productAPI";

jest.mock("../api/productAPI");

test("renders Product", async () => {
    api.fetchProduct.mockResolvedValue({
        id: 1,
        name: "Phone",
        price: 200,
        currency: "$"
    });

    render(<Product />);

    expect(await screen.findByText("Phone")).toBeInTheDocument();
    expect(await screen.findByText("200 $")).toBeInTheDocument();
});
