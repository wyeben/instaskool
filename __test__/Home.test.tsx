import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/(main)/page';

// to add more tests we use describe

describe('Home', () => {
  it('should have Docs text', () => {
    //Tripple A partern for writing tests.
    render(<Home />); // Arrange
    const myElem = screen.getByText('self-esteem'); //Action
    expect(myElem).toBeInTheDocument(); // Assert
  });

  it('should contain the text information', () => {
    //Tripple A partern for writing tests.
    render(<Home />); // Arrange
    const myElem = screen.getByText(/tech/i); //Action
    expect(myElem).toBeInTheDocument(); // Assert
  });
  it('should contain header', () => {
    //Tripple A partern for writing tests.
    render(<Home />); // Arrange
    const myElem = screen.getByRole('heading', {
      name: 'With the Best & Experienced Tutors',
    }); //Action
    expect(myElem).toBeInTheDocument(); // Assert
  });
});
