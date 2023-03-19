
import { defineStore } from 'pinia'
import axios from 'axios'
import { RouterLink, RouterView } from "vue-router";


export const useDataStore = defineStore('data', {
  state: () => ({
    name: '',
    baseUrl: 'http://localhost:3000',
    // baseUrl: 'https://macspotify-production.up.railway.app',
    clientId: '',
    paymentToken: '',
    spotifyProfile: {},
    spotifyTopTracks: {},
    recentlyPlayed: {},
    currentlyPlaying: {},
    topArtists: {},
    topTracksByArtist: {},
    tracksByTopOneSong: {},
    searchList: null,
    topGlobal: {},
    topLocal: {}
  }),
  getters: {

  },
  actions: {
    async login(code) {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/login`,
            method: 'post',
            data: {
              code: code
            }
          })
        console.log(req);
      } catch (error) {
        console.log(error);
      }
    },
    async getClientId() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/clientId`,
            method: 'get'
          })
        return req
      } catch (error) {
        console.log(error);
      }
    },
    async getProfile() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/profile`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.spotifyProfile = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    
    
    async getTopTracks() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/topTracks`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.spotifyTopTracks = req.data
        
        let trackId = req.data.items[0].id
        let artistId = req.data.items[0].artists[0].id 
        console.log(req.data, "TOP 10 SONGS" );
        
        await this.getTracksByTopOneTrack(trackId, artistId) 
        
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    async getTracksByTopOneTrack(a, b) {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/tracksByTopOneTrack?trackId=${a}&artistId=${b}`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.tracksByTopOneSong = req.data 
        console.log(req.data, " oyuoyvey");
      } catch (error) {
        console.log(error);
      }
    },
    
     
    
    
    async getTopArtists() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/topArtists`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.topArtists = req.data
        await this.getTopTracksByArtist(req.data.items[0].id)
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    async getTopTracksByArtist(artistId) {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/topTracksByArtist/?artistId=${artistId}`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
          
          
          
        this.topTracksByArtist = req.data
        console.log(req.data, "LASHEM SHAAAMAYIM");
      } catch (error) {
        console.log(error);
      }
    },

    async getRecentlyPlayed() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/recently`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.recentlyPlayed = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    
    // async getCurrentPlaying() {
    //   try {
    //     const req = await
    //       axios({
    //         url: `${this.baseUrl}/nowPlaying`,
    //         method: 'get',
    //         headers: {
    //           access_token: localStorage.getItem('token')
    //         }
    //       })
    //     this.currentlyPlaying = req.data
    //     console.log(req.data, "yamim tovim");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }, 
    
     async getCurrentPlaying() {  
      let url = "https://api.spotify.com/v1/me/player/currently-playing"; 
      try {
        const { data } = await
          axios({
            url,
            method: "get",
            headers: {
              Authorization: `Bearer ` + localStorage.getItem('token'),
            },
        }); 
        
        this.currentlyPlaying = data
        console.log(data, "yamim tovim");
        
      } catch (error) { 
        console.log(error);

      }
    },
    
    
    

    // async searchSongs(string) {
    //   const encodedString = encodeURIComponent(string);
    //   try {
    //     const req = await
    //       axios({
    //         url: `${this.baseUrl}/findSongs?q=${encodedString}`,
    //         method: 'get',
    //         headers: {
    //           access_token: localStorage.getItem('token')
    //         }
    //       })
    //     this.searchList = req.data.tracks.items
    //     console.log(req.data.tracks.items);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    
    async searchSongs(string) { 
       
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/findSongsByAi`,
            method: 'post',
            headers: {
              access_token: localStorage.getItem('token'),  
            },
            data: {
              keyword: "strin"
            }
          })
        this.searchList = req.data
        console.log(req.data, "aha aha aha aha aha");
      } catch (error) {
        console.log(error);
      }
      
       
    },
    
     
    async getTopGlobal() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/topGlobal`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.topGlobal = req.data
        console.log(req.data);
      } catch (error) {
        console.log(error);
      }
    },
    
    
    async getTopLocal() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/TopLocal`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        this.topLocal = req.data
        console.log(req.data, "TOP LOCAL");
      } catch (error) {
        console.log(error);
      }
    },
    
    
    async getPaymentToken() {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/paymentToken`,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token')
            }
          })
        console.log(req.data);
        return req.data
      } catch (error) {
        console.log(error);
      }
    },

    async subscribed(paymentToken) {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/subcribed`,
            method: 'patch',
            headers: {
              access_token: localStorage.getItem('token'),
              payment_token: paymentToken
            }
          })

        await this.getProfile()
        console.log(req.data);
        return req.data
      } catch (error) {
        console.log(error);
      }
    },

    async getDownloadLink(id) {
      try {
        const req = await
          axios({
            url: `${this.baseUrl}/download/` + id,
            method: 'get',
            headers: {
              access_token: localStorage.getItem('token'),
            }
          })
        // alert(req.data)
        console.log(req.data);
        return req.data
      } catch (error) {
        console.log(error);
      }
    },

    async snap() {
      try {
        const { payment_token } = await this.getPaymentToken()
        // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
        const flagging = this.subscribed
        window.snap.pay(payment_token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            flagging(payment_token)
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log("wating your payment!", result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log("payment failed!", result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            console.log('you closed the popup without finishing the payment');
          }
        })

      } catch (error) {
        console.log(error);
      }
    }

  }
})














