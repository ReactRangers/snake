export default ({ fruits }, { fruitExpirationAge }) => ({
  fruits: fruits
    .map(f => f.cloneWith({ age: f.age + 1, key: f.key }))
    .filter(f => f.age <= fruitExpirationAge),
});
