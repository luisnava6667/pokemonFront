export const handleCheckboxChange = (
  typeName,
  selectedTypes,
  setSelectedTypes
) => {
  if (selectedTypes.includes(typeName)) {
    setSelectedTypes(selectedTypes.filter((type) => type !== typeName))
  } else {
    setSelectedTypes([...selectedTypes, typeName])
  }
}
