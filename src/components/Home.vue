<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex lg4 sm12 xs12>
        <v-card class="widget-card" style="min-width: 100%">
          <v-card-text class="pa-0">
            <v-container class="pa-0">
              <div class="layout row ma-0" :style="{ backgroundColor: '#00b297' }">
                <div class="sm4 xs4 flex">
                  <div class="layout column ma-0 justify-center align-center">
                    <v-icon size="76px" color="white" style="opacity: 0.8;">money_off</v-icon>
                  </div>
                </div>
                <div class="layout column ma-0 justify-center" style="color: white;">
                  <span class="caption">Balance</span>
                  <div class="headline">{{ balance }}</div>
                </div>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex lg8 sm12 xs12>
        <v-card class="widget-card" style="min-width: 100%">
          <v-card-text class="pa-0">
            <v-container class="pa-0">
              <div class="layout row ma-0" :style="{ backgroundColor: '#1E88E5' }">
                <div class="sm4 xs4 flex">
                  <div  class="layout column ma-0 justify-center align-center">
                    <v-icon size="76px" color="white" style="opacity: 0.8;">laptop</v-icon>
                  </div>
                </div>
                <div class="layout column ma-0 justify-center" style="color: white;">
                  <span class="caption">Wallet number</span>
                  <div class="headline">{{ wallet }}</div>
                </div>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>

    <v-layout row wrap>
      <v-flex d-flex lg8 sm12 xs12>
        <v-data-table
          style="min-width: 100%"
          class="table"
          :headers="headers"
          :items="users">
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">
              <v-avatar size="42">
                <img :src="randomAvatar()" alt="avatar">
              </v-avatar>
            </td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.username }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.company.name }}</td>
            <td class="text-xs-left">{{ props.item.website }}</td>
            <!-- <td class="text-xs-left">{{ props.item.address.city }}</td> -->
          </template>
        </v-data-table>
      </v-flex>

      <v-flex d-flex lg4 sm12 xs12>
        <v-card
          class="mx-auto timeline"
          >
          <v-card
            dark
            flat>
            <v-btn
              absolute
              bottom
              color="pink"
              right
              fab
              @click="">
              <v-icon>person_add</v-icon>
            </v-btn>
            <v-card-title class="pa-2 purple lighten-3">
              <v-btn icon>
                <v-icon>mdi-menu</v-icon>
              </v-btn>
              <h3 class="title font-weight-light text-xs-center grow">Timeline</h3>
              <v-avatar>
                <v-img :src="avatarIcon"></v-img>
              </v-avatar>
            </v-card-title>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
              gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)">
              <v-container fill-height>
                <v-layout align-center>
                  <strong class="display-4 font-weight-regular mr-4">8</strong>
                  <v-layout column justify-end>
                    <div class="headline font-weight-light">Monday</div>
                    <div class="text-uppercase font-weight-light">February 2015</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
          <v-card-text class="py-0">
            <v-timeline
              align-top
              dense>
              <v-timeline-item
                color="pink"
                small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>5pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>New Icon</strong>
                    <div class="caption">Mobile App</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="teal lighten-3"
                small>
                <v-layout wrap pt-3>
                  <v-flex xs3>
                    <strong>3-4pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Design Stand Up</strong>
                    <div class="caption mb-2">Hangouts</div>
                    <v-avatar>
                      <v-img
                        src="https://avataaars.io/?topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                      ></v-img>
                    </v-avatar>
                    <v-avatar>

                      <v-img
                        src="https://avataaars.io/?topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                      ></v-img>
                    </v-avatar>
                    <v-avatar>
                      <v-img
                        src="https://avataaars.io/?topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                      ></v-img>
                    </v-avatar>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="pink"
                small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>12pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Lunch break</strong>
                  </v-flex>
                </v-layout>
              </v-timeline-item>

              <v-timeline-item
                color="teal lighten-3"
                small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>9-11am</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Finish Home Screen</strong>
                    <div class="caption">Web App</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

const avatars = [
  'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  'https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  'https://avataaars.io/?'
];

export default {
  data () {
    return {
      users: [],
      avatarIcon: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Heather&graphicType=SkullOutline&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Yellow',
      wallet: '',
      balance: 0,
      userId: '',
      headers: [
        {
          value: 'Avatar',
          align: 'left',
          sortable: false
        },
        {
          text: 'Name',
          value: 'Name',
          align: 'left',
          sortable: true
        },
        {
          text: 'User Name',
          value: 'Username',
          align: 'left',
          sortable: true
        },
        {
          text: 'Email',
          value: 'Email',
          align: 'left',
          sortable: true
        },
        {
          text: 'Phone',
          value: 'Phone',
          align: 'left',
          sortable: true
        },
        {
          text: 'Company',
          value: 'Company',
          align: 'left',
          sortable: true
        },
        {
          text: 'Website',
          value: 'Website',
          align: 'left',
          sortable: true
        }
      ]
    }
  },
  computed: {

  },
  mounted () {
    this.getUser()
  },
  methods: {
    randomAvatar () {
      return avatars[Math.floor(Math.random() * avatars.length)];
    },
    async getUser () {
      await this.$store.dispatch('getUser')

      this.wallet = this.$store.getters.user.wallet
      this.balance = this.$store.getters.user.balance
      this.userId = this.$store.getters.user.id

    }
  }
}

</script>

<style scoped>
  .widget-card {
    border-radius: 5%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }

  .timeline {
    border-radius: 3px;
    background-clip: border-box;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: transparent;
  }
</style>
