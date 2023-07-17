export const handleCheckboxChange = (
  typeName,
  selectedTypes,
  setSelectedTypes,
  setImageOpacity
) => {
  if (selectedTypes.includes(typeName)) {
    setSelectedTypes(selectedTypes.filter((type) => type !== typeName))
    setImageOpacity(1)
  } else {
    setSelectedTypes([...selectedTypes, typeName])
    setImageOpacity(0.5)
  }
}
