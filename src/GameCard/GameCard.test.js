// test that setCurrrentGameInfo is called and with the right params
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import GameCard from "./GameCard";
import { filteredVideoGameData } from "../sampleData";

describe("GameCard", () => {
  beforeEach(() => {
    const mockFormatInput = jest.fn();
    const mockSetCurrentGameInfo = jest.fn();

    render(
      <MemoryRouter>
        <GameCard
          id={filteredVideoGameData.id}
          key={filteredVideoGameData.id}
          name={filteredVideoGameData.name}
          art={filteredVideoGameData.backgroundImage}
          formatInput={mockFormatInput}
          setCurrentGameInfo={mockSetCurrentGameInfo}
          wishList={[filteredVideoGameData]}
        />
      </MemoryRouter>
    );
    it("should call setCurrentGameInfo when it is clicked on", () => {
      const gameCard = screen.getByTestId("3272");
      userEvent.click(gameCard);
      expect(mockSetCurrentGameInfo).toBeCalled();
      expect(mockSetCurrentGameInfo).toBeCalledWith(filteredVideoGameData);
    });
  });
});
