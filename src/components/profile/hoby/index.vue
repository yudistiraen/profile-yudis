<template>
    <v-card class="px-10">
        <v-card-title class="headline font-weight-bold">
            My work experience :
        </v-card-title>
        <v-card-text v-for="(work, i) in works" :key="i">
            <h3>{{work.position}}</h3>
            <h3 class="font-weight-medium font-italic">{{work.company}} | {{work.location}}, {{work.periodStart}} - {{work.periodEnd}}</h3>
            <ul v-for="(jobDesc, i) in work.jobDescs" :key="i">
                <li>{{jobDesc}}</li>
            </ul>
        </v-card-text>
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