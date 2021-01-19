import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { fetchGameData } from "../apiCalls";
import { unfilteredVideoGameData } from "../sampleData";
import userEvent from "@testing-library/user-event";
jest.mock("../apiCalls");

describe("App", () => {
  beforeEach(() => {
    fetchGameData.mockResolvedValue(unfilteredVideoGameData);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  it("should render the homepage", () => {
    const title = screen.getByRole("heading", {
      name: /game crave/i,
    });
    const homeButton = screen.getByRole("button", {
      name: /home/i,
    });
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search for game/i);

    expect(title).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("should be able to search for a game when its typed into the search bar and the button is clicked", async () => {
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search for game/i);

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);

    const gameName = await waitFor(() => screen.getByText("Rocket League"));

    expect(gameName).toBeInTheDocument();
  });

  it("should be able to add a game to the wish list and then view it by navigating to the wish list page", async () => {
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search for game/i);

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);

    const wishListButton = screen.getByText(/my wish list/i);
    const addToWishListButton = await waitFor(() => {
      return screen.getByRole("button", {
        name: /add to wish list/i,
      });
    });

    userEvent.click(addToWishListButton);
    userEvent.click(wishListButton);

    const gameCard = screen.getByTestId("3272");

    expect(gameCard).toBeInTheDocument();
  });

  it("should be able to remove a game to the wish list and then see its not there by navigating to the wish list page", async () => {
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search for game/i);

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);

    const wishListButton = screen.getByText(/my wish list/i);
    const addToWishListButton = await waitFor(() => {
      return screen.getByRole("button", {
        name: /add to wish list/i,
      });
    });

    userEvent.click(addToWishListButton);
    userEvent.click(wishListButton);

    const gameCard = screen.getByTestId("3272");

    userEvent.click(gameCard);

    const removeFromWishListButton = screen.getByRole("button", {
      name: /remove from wish list/i,
    });

    userEvent.click(removeFromWishListButton);

    expect(gameCard).not.toBeInTheDocument();
  });

  it("should be able to take you to the home page from a game details page when clicking the title or home button", async () => {
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search for game/i);
    const homeButton = screen.getByRole("heading", {
      name: /game crave/i,
    });

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);

    const purchasingInfo = await waitFor(() => {
      return screen.getByText(/where to purchase/i);
    });

    userEvent.click(homeButton);

    expect(purchasingInfo).not.toBeInTheDocument();
  });

  it("should be able to take you to the home page from the wish list page when clicking the title or home button", async () => {
    const homeButton = screen.getByRole("heading", {
      name: /game crave/i,
    });

    const wishListButton = screen.getByText(/my wish list/i);

    userEvent.click(wishListButton);

    const wishListTitle = await waitFor(() => {
      return screen.getByRole("heading", {
        name: /your wish list/i,
      });
    });

    userEvent.click(homeButton);

    expect(wishListTitle).not.toBeInTheDocument();
  });
});
