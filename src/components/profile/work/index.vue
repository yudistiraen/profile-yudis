<template>
    <v-card flat class="px-10 py-5">
        <v-card-title class="headline font-weight-bold">
            My work experience :
        </v-card-title>
        <v-row justify="center">
          <v-expansion-panels accordion class="elevation-0">
            <v-expansion-panel
              v-for="(work,i) in works"
              :key="i"
            >
              <v-expansion-panel-header>
                <b>{{work.company}}</b> <span class="font-weight-medium font-italic" style="text-align: right">{{work.position}} | {{work.location}}, {{work.periodStart}} - {{work.periodEnd}}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul class="job-desc" v-for="(jobDesc, i) in work.jobDescs" :key="i">
                    <li>{{jobDesc}}</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      works : [
         {
          position: 'Front End Developer',
          company: 'Indodax',
          location : 'Jakarta',
          periodStart: 'Feb 2021',
          periodEnd : 'present',
          jobDescs : [
            'Building SEO friendly website',
            'Maintain and developing new features for the existing website at the Front End side.',
            'Create reuseable component for the future use.',
            'Integrate with Back End to connect the API.',
            'Maintain and bug fixing the website at the Front End side.',
            'Bug fixing with the Back End Dev team.'
          ]
        },
        {
          position: 'Front End Developer',
          company: 'Berau Coal Energy',
          location : 'Jakarta',
          periodStart: 'Feb 2019',
          periodEnd : 'Feb 2021',
          jobDescs : [
            'Creating website face based on UI design from UI/UX.',
            'Create reuseable component for the future use.',
            'Integrate with Back End to connect the API.',
            'Maintain and bug fixing the website at the Front End side.',
            'Bug fixing with the Back End Dev team.'
          ]
        },
        {
          position: 'Junior Front End Developer',
          company: 'PT. Solusi Untuk Negeri',
          location : 'Salatiga',
          periodStart: 'Jul 2018',
          periodEnd : 'Jan 2019',
          jobDescs : [
            'Worked as Junior Front End with Angular for web and Ionic for mobile app as a framework.',
            'Integrate with Back End to connect the API.',
            'Maintain and bug fixing the website at the Front End side.',
            'Bug fixing with the Back End Dev team.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  ul.job-desc {
    list-style-type: circle;
  }

  .v-expansion-panel::before {
    box-shadow: none;
  }
</style>