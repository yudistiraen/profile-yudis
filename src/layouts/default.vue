<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <i v-if="item.icon" :class="item.icon"></i>
            <v-img v-else :src="item.iconImg" width="25" max-width="25" class="left" style="filter: brightness(0) invert(1);"/>
            <!-- <v-icon>{{ item.icon }}</v-icon> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; Yudis 2021 | v {{$config.clientVersion}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'fas fa-user-alt',
          title: 'Profile',
          to: '/'
        },
        {
          icon: '',
          iconImg: '/img/xivmsq.png',
          title: 'Final Fantasy XIV',
          to: '/myffxiv'
        },
        {
          icon: 'fas fa-list',
          iconImg: '',
          title: 'Change Log',
          to: '/changelog'
        },
        {
          icon: 'fas fa-smile-wink',
          title: 'TBD',
          to: ''
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Yudistira E N'
    }
  }
}
</script>
