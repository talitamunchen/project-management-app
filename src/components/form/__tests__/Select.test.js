import { fireEvent, render, screen } from "@testing-library/react"
import Select from "../Select"

it("should render select element", () => {
  render(
    <Select
      name="category_id"
      text="Select a category"
      options={[]}
      handleOnChange={() => {}}
      value={""}
    />
  )
  const selectElement = screen.getByText("Select an option")
  expect(selectElement).toBeInTheDocument()
})

it("should be able to select an option", () => {
  render(
    <Select
      name="category_id"
      text="Select a category"
      options={[
        {
          id: 1,
          name: "Infra",
        },
        {
          id: 2,
          name: "Dev",
        },
      ]}
      handleOnChange={() => jest.fn()}
      value={1}
    />
  )
  fireEvent.change(screen.getByTestId("option-1"), { target: { value: 2 } })
  expect(screen.getByTestId("select").value).toBe('2')
})
