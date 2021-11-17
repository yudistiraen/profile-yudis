<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="11">
      <v-card class="logo pa-10">
        <div class="d-flex">
          <v-row>
            <v-col sm="12" md="6" class="px-5 py-5">
                <div class="text-h3">Change log</div>
            </v-col>
          </v-row>
        </div>
         <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(changes, i) in changesLog" 
            :key="i"
          >
            <v-expansion-panel-header>
              <b>v{{changes.version}}</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul class="content-title">
                  <li class="mt-3" v-for="(change, i) in changes.log" :key="i">
                      <span class="title"> {{change.content}}</span>
                      <ul class="content-changes">
                          <li v-for="(chgangeItem, i) in change.changes" :key="i">{{change.changes[i]}}</li>
                      </ul>
                  </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      changesLog: [
          {
              version: '1.0.0',
              log : [
                  {
                      content: 'all',
                      changes: [
                          'New release'
                      ]
                  }
              ]
          },
          {
              version: '1.1.0',
              log : [
                  {
                      content: 'Final Fantasy XIV',
                      changes: [
                          'Added Final Fantasy XIV menu, showing my character detail on Final Fantasy XIV Online.'
                      ]
                  },
                  {
                      content: 'Change Log',
                      changes: [
                          'Release Change Log for the website'
                      ]
                  },
                  {
                      content: 'Others',
                      changes: [
                          'Add tailwindcss'
                      ]
                  }
              ]
          },
          {
              version: '1.1.1',
              log : [
                  {
                      content: 'Profile',
                      changes: [
                        'Change contacts tabs to button'
                      ]
                  },
                  {
                      content: 'Final Fantasy XIV',
                      changes: [
                        'Fixing mobile responsive'
                      ]
                  }
              ]
          },
          {
              version: '1.1.2',
              log : [
                  {
                      content: 'Profile',
                      changes: [
                        'Change job experience to accordion'
                      ]
                  },
                  {
                      content: 'Change Log',
                      changes: [
                        'Change Change-List to accordion'
                      ]
                  }
              ]
          }
      ]
    }
  },
  components: { 
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
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
  
  ul.content-title {
    list-style-type: square;
    /* background:; */
    /* font-weight: bold; */
    .title {
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  ul.content-changes {
    list-style-type: circle;
  }

  .v-expansion-panel::before {
    box-shadow: none;
  }
</style>