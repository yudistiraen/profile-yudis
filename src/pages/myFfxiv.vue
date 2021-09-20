<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="11">
      <v-card class="logo pa-10">
        <div class="d-flex">
          <v-row>
            <v-col sm="12" md="12" class="px-5 py-5">
                <div class="text-h3 mb-10">My Final Fantasy XIV Profile </div>
                <v-row>
                    <v-col md="1" class="ma-auto">
                        <template>
                            <div v-if="loading">
                                <v-skeleton-loader
                                    type="avatar"
                                    width="150"
                                ></v-skeleton-loader>
                            </div>
                            <div v-else>
                                <v-avatar
                                    size="60"
                                >
                                    <v-img :src="avatarUrl" width="75" max-width="75" class="left rounded"/>
                                </v-avatar>
                            </div>
                        </template>
                    </v-col>
                    <v-col>
                        <template>
                            <div v-if="loading">
                                <v-skeleton-loader
                                    type="text"
                                    width="150"
                                ></v-skeleton-loader>
                            </div>
                            <div  v-else>
                                Name : {{charName}}
                            </div>
                        </template>
                        <template>
                            <div class="mt-3" v-if="loading">
                                <v-skeleton-loader
                                    class="ma-0"
                                    width="150"
                                    type="text"
                                ></v-skeleton-loader>
                            </div>
                            <div class="mt-3"  v-else>
                                Server : {{server}}
                            </div>
                        </template>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="mt-10">
            <v-row>
                <v-col class="pa-2" md="5">
                    <template>
                        <div v-if="loading">
                            <v-skeleton-loader
                                type="image"
                                width="360"
                            ></v-skeleton-loader>
                        </div>
                        <div v-else>
                            <v-img :src="portraitUrl" width="360" max-width="360" class="r15-image"/>
                        </div>
                    </template>
                </v-col>
                <v-col class="pa-2" md="6">
                    <jobs :charData="charData"/>
                </v-col>
            </v-row>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import jobs from '~/components/myffxiv/jobs';


export default {
  data () {
    return {
      charData: {},
      loading: false
    }
  },
  computed: {
      avatarUrl(){
        const vm = this;
        return vm.charData.Character?.Avatar;
      },
      portraitUrl(){
        const vm = this;
        return vm.charData.Character?.Portrait;
      },
      charName(){
        const vm = this;
        return vm.charData.Character?.Name;
      },
      server(){
        const vm = this;
        return vm.charData.Character?.Server;
      },
  },
  components: { 
    jobs
  },
  methods: {
      ...mapActions({
          getCharData: 'getCharData'
      }),
      async init(){
          const vm = this;
          vm.loading = true;
          let charResponse = await vm.getCharData();
          if (charResponse) {
            vm.charData = charResponse;
            vm.loading = false;
          }
      },
  },
  mounted(){
      const vm = this;

      vm.init();
  }
}
</script>

<style scoped>
  .r15-image {
    border-radius: 15px;
  }
  .contact-grid {
    max-width: 50px;
    border: 1px solid #ffffff;
    cursor: pointer;
  }
  .contact-grid:hover, i.v-icon.v-icon:hover {
    max-width: 50px;
    background: #ffffff;
    color: #000000;
    border: 1px solid #ffffff;
    cursor: pointer;
  }
</style>