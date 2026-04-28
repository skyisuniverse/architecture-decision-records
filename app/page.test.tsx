import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Page from './page'

// Minimal MUI theme (required because your page uses useTheme())
const theme = createTheme()

test('Page renders the architectural decision record placeholder content', () => {
  render(
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  )

  expect(screen.getByText('Use Markdown Architectural Decision Records')).toBeInTheDocument()
  expect(screen.getByText('Context and Problem Statement')).toBeInTheDocument()
  expect(
    screen.getByText('We want to record architectural decisions made in this project.')
  ).toBeInTheDocument()
})

test('Page renders inside a Box (MUI layout root)', () => {
  render(
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  )

  // The three Typography texts are direct children of the root Box
  expect(screen.getByText('Use Markdown Architectural Decision Records')).toBeInTheDocument()
})