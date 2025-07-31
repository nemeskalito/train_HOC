import { createContext, useCallback, useState } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";
import WithRenderTracker from "./WithRenderTracker";

const WithCounter = WithRenderTracker(CounterButton);
const WithSearch = WithRenderTracker(SearchInput);
const WithList = WithRenderTracker(ItemList);

const array = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "imbe",
  "jackfruit",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli",
  "vanilla",
  "watermelon",
  "xigua",
  "yellow plum",
  "zucchini",
  "almond",
  "blueberry",
  "cranberry",
  "dragonfruit",
  "eggplant",
  "fennel",
  "gooseberry",
  "hazelnut",
  "indigo",
  "jujube",
  "kumquat",
  "lime",
  "mulberry",
  "olive",
  "peach",
  "quince",
  "rambutan",
  "sapodilla",
  "tomato",
  "umeboshi",
  "voavanga",
  "walnut",
  "yam",
  "zinfandel",
  "avocado",
  "breadfruit",
  "cantaloupe",
  "durian",
  "elderberry",
  "fig",
  "grapefruit",
  "huckleberry",
  "iguana melon",
  "loganberry",
  "mandarin",
  "nectar",
  "persimmon",
  "quince",
  "rice",
  "starfruit",
  "tamarind",
  "ugli fruit",
  "vegetable",
  "wax apple",
  "xanthosoma",
  "yuzu",
  "artichoke",
  "broccoli",
  "cauliflower",
  "dill",
  "endive",
  "fava bean",
  "garlic",
  "horseradish",
  "iceberg lettuce",
  "kale",
  "leek",
  "banana",
  "mushrooms",
  "nettles",
  "onion",
  "peas",
  "radish",
  "spinach",
  "thyme",
  "watercress",
  "yams",
  "zest",
];

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const memoizedCount = useCallback(() => setCount((val) => ++val), []);
  const memoizedSearch = useCallback((val) => setSearch(val), []);

  return (
    <>
      <WithCounter
        count={count}
        setCount={memoizedCount}
        name={"CounterButton"}
      />
      <WithSearch setSearch={memoizedSearch} name={"SearchInput"} />
      <WithList array={array} search={search} name={"ItemList"} />
    </>
  );
}

export default App;
