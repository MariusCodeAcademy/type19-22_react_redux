# Steps to Redux

1. `npm install redux react-redux`
2. sukurti store/index.js faila kur bus redux kodas
3. aprasom reducer funkcija ir exportuojam store
4. suteikiam globalu state visai musu aplikacijai

```js
<Provider store={store}>
  <App />
</Provider>
```

5. pasiimti reiksme is redux

```js
const counterValFromStore = useSelector((state) => state.counterValue);
```

6. atlikti veiksma naudojant redux

```js
// atlikti veiksma su redux naudojam dispatch
const dispatch = useDispatch();

const goUp = () => {
  dispatch({ type: 'UP' });
};
```
