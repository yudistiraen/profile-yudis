import axios from 'axios';

const state = () => ({
})

const getters = {
  
}

const mutations = {
 
}

const actions = {
    async getCharData(){
        const vm = this;
        try {
            console.log('getCharData')
            let response =  await axios.get('https://xivapi.com/character/36911570?data=AC,FC,MIMO');
            return response.data;
        } catch (err) {
            console.log('err', err)
        }
        
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
