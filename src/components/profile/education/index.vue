<template>
    <v-card class="px-10">
        <v-card-title class="headline font-weight-bold">
            My education background :
        </v-card-title>
        <v-card-text v-for="(education, i) in educations" :key="i">
            <h3>{{education.name}}</h3>
            <h3 class="font-weight-medium font-italic">{{education.majors}}, {{education.majorsPeriodStart}} - {{education.majorsPeriodEnd}}</h3>
            <ul v-for="(track, i) in education.tracks" :key="i">
                <li>{{track}}</li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      educations : [
        {
          name: 'Universitas Kristen Satya Wacana',
          majors: 'Diploma Technical Information',
          majorsPeriodStart: '2014',
          majorsPeriodEnd : '2017',
          tracks : [
            'Become a lecturer assistant for each trimester.',
            'Become a secretary at LK (Lembaga Kemahasiswaan) UKSW | 2015 - 2016 period.',
            'Become a secretary at Kelompok Bakat Minat Kayon-Bit UKSW | 2016 - 2017 period.',
            'Graduated with a GPA of 3.34.'
          ]
        }
      ]
    }
  }
}
</script>