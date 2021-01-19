import { MemoryRouter } from "react-router-dom";
import Form from "./Form";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "react-dom";

describe("Form", () => {
  beforeEach(() => {
    const mockSearchGame = jest.fn();
    const mockSetSearchGame = jest.fn();
    render(
      <MemoryRouter>
        <Form
          searchGame={mockSearchGame}
          searchedGame={"rocket league"}
          setSearchedGame={mockSetSearchGame}
        />
      </MemoryRouter>
    );
  });

  it("should render the form correctly", () => {
    const searchBar = screen.getByPlaceholderText(/type the title of a game/i);
    const searchButton = screen.queryByText(/search for game/i);

    expect(searchBar).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("should be called with searchGame", () => {
    const mockSearchGame = jest.fn();
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.queryByText(/search for game/i);

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);
    expect(mockSearchGame).toBeCalled();
    expect(mockSearchGame).toBeCalledWith("rocket league");
  });
  it("should be called with setSearchedGame", () => {
    const mockSetSearchedGame = jest.fn();
    const searchBar = screen.getByRole("textbox");
    const searchButton = screen.queryByText(/search for game/i);

    userEvent.type(searchBar, "rocket league");
    userEvent.click(searchButton);
    expect(mockSetSearchedGame).toBeCalled();
    expect(mockSetSearchedGame).toBeCalledWith("rocket league");
  });
});
