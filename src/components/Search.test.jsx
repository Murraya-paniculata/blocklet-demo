import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event';
import Search from "./Search";

// event test
test('should ignore empty input', () => { 
    const onSearchQuery = jest.fn();

    render(<Search onSearchQuery={onSearchQuery} loading={false} />);

    UserEvent.type(screen.getByPlaceholderText("Search your transaction hash or a block index"), "{enter}");
    UserEvent.click(screen.getByRole('search'));

    expect(onSearchQuery).not.toBeCalled();
 })

 test('should call onSearchQuery when input is not empty and loading is false', () => {
    const onSearch = jest.fn();

    render(<Search onSearchQuery={onSearch} loading={false} />);

    UserEvent.type(screen.getByPlaceholderText("Search your transaction hash or a block index"), "123{enter}");
    expect(onSearch).toHaveBeenCalledTimes(1)
    UserEvent.click(screen.getByRole('search'));
    expect(onSearch).toHaveBeenCalledTimes(2)
 })
 
