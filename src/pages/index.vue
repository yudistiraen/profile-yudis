<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="11">
      <v-card flat class="logo pa-10">
        <div class="d-flex">
          <v-row>
            <v-col sm="12" md="3">
                <v-img src="/img/my-photo.png" width="245" max-width="300" class="left"/>
            </v-col>
            <v-col sm="12" md="6" class="px-5 py-5">
                <div class="text-h1">I'm Yudis</div>
                <h2 class="ml-2">Front End Developer</h2>
                <div>
                  <v-chip
                    class="ma-2"
                    v-for="(chip, i) in chips"
                    :color="chip.color"
                    :key="i"
                  >
                    <i class="mr-1" :class="chip.icon"></i>
                    {{chip.title}}
                  </v-chip>
                </div>
            </v-col>
          </v-row>
          
        </div>
        <v-row justify="end" >
            <a v-for="(contact, i) in contacts" :key="i" class="contact-btn" :href="contact.href" target="_blank">
              <i :class="contact.icon"></i>
            </a>
        </v-row>
      </v-card>
      <v-card flat class="px-10">
        <v-card-title class="headline font-weight-bold">
          Hi fam, welcome to my profile.
        </v-card-title>
        <v-card-text>
          <p>I am a front end developer who has used several javascript frameworks such as Angular, VueJs, ReactJs, ReactNative. Besides my job as a front end developer, i love playing video games.</p>
        </v-card-text>
      </v-card>
      <!-- Education Section -->
      <education/>
      <!-- Work Exp Section -->
      <work/>
    </v-col>
  </v-row>
</template>

<script>
import education from '~/components/profile/education';
import work from '~/components/profile/work';

export default {
  data () {
    return {
      expand: null,
      tab: null,
      chips: [
        {
          title: 'Vue',
          color: '#42b883',
          icon: 'fab fa-vuejs'
        },
        {
          title: 'React',
          color: '#61dbfb',
          icon: 'fab fa-react'
        }
      ],
      contacts: [
        {
          icon: 'fab fa-linkedin-in',
          title: 'Linkedin',
          href: 'https://www.linkedin.com/in/yudistira-nugraha-8b0756170/'
        },
        {
          icon: 'far fa-envelope',
          title: 'Email',
          href: 'mailto: yudistira.enugraha@gmail.com'
        }
      ],
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
  },
  components: { 
    education, 
    work
  },
  methods: {
  }
}
</script>

<style scoped>
  .contact-btn {
    max-width: 50px;
    text-align: center;
    padding: 3px 15px;
    line-height: 40px;
    cursor: pointer;
    font-size: 20px;
    color: #ffffff;

  }
  
  .contact-btn:hover {
    background-color: #ffffff;
    color: #000000;
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