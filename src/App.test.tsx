import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders and displays the button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /click/i })
    expect(button).toBeInTheDocument()
  })

  it('does not display Hello text initially', () => {
    render(<App />)
    const heading = screen.queryByRole('heading', { name: /hello/i })
    expect(heading).not.toBeInTheDocument()
  })

  it('displays Hello text when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /click/i })
    await user.click(button)

    const heading = screen.getByRole('heading', { name: /hello/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello')
  })
})
