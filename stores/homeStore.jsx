import axios from 'axios';
import { create } from 'zustand';
import debounce from '../src/helpers/debounce';

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: async (e) => {
    const query = e.target.value;
    set({ query });
    await homeStore.getState().searchCoins();
  },

  searchCoins: debounce ( async () => {
    const { query, trending } = homeStore.getState();
    if(query.length > 2){
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
    const coins = res.data.coins.map((coin) => ({
      name: coin.name,
      image: coin.large,
      id: coin.id,
      // priceBtc: coin.item.price_btc,
    }));
    set({ coins });
  }
  else{
    set({ coins: trending})
  }
  }, 500),

  fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    const coins = res.data.coins.map((coin) => ({
      name: coin.item.name,
      image: coin.item.small,
      id: coin.item.id,
      priceBtc: coin.item.price_btc,
    }));
    set({ coins, trending: coins });
  },
}));

export default homeStore;
