/*
should render both the heading and any games that are on the wish list

when card is clicked, calls some function with x number of params and that
its only called once



*/
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import WishList from "./WishList";

describe("WishList", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <WishList />
      </MemoryRouter>
    );

    it("should render the wish list page correctly", async () => {
      const wishListButton = screen.getByText(/my wish list/i);

      userEvent.click(wishListButton);

      const wishListTitle = await waitFor(() => {
        return screen.getByRole("heading", {
          name: /your wish list/i,
        });
      });

      expect(wishListTitle).toBeInTheDocument();
    });

    it("should r", async () => {
      const wishListButton = screen.getByText(/my wish list/i);

      userEvent.click(wishListButton);

      const wishListTitle = await waitFor(() => {
        return screen.getByRole("heading", {
          name: /your wish list/i,
        });
      });

      expect(wishListTitle).toBeInTheDocument();
    });
  });
});
