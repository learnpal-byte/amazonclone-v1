<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">Your Addresses</h1>
              <!-- Message from Server -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{ message }}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration:none;"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- Address -->
                  <div
                    class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                    v-for="(address, index) in addresses"
                    :key="address._id"
                  >
                    <div class="a-box a-spacing-none normal-desktop-address-tile">
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  <!-- Address Fullname -->
                                  <b>{{ address.fullName }}</b>
                                </h5>
                              </li>
                              <!-- Address street address -->
                              <li>{{ address.streetAddress }}</li>
                              <!-- Address city state zip code -->
                              <li>{{ address.city }}, {{ address.state}} {{ address.zipCode }}</li>
                              <!-- Address country -->
                              <li>{{ address.country }}</li>
                              <!-- Address Phone number -->
                              <li>Phone number: {{ address.phoneNumber }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Update Button -->
                      <div class="edit-address-desktop-link">
                        <nuxt-link :to="`/address/${address._id}`">Edit</nuxt-link>&nbsp; | &nbsp;
                        <!-- Delete Button -->
                        <a href="#" @click="onDeleteAddress(address._id, index)">Delete</a>
                        &nbsp; | &nbsp;
                        <!-- Set Address as Default -->
                        <a href="#" @click="onSetDefault(address._id)">Set as Default</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/addresses");

      return {
        addresses: response.addresses
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    async onDeleteAddress(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/addresses/${id}`);

        if (response.success) {
          this.message = response.message;
          this.addresses.splice(index, 1);
        }
      } catch (err) {
        this.message = err.message;
        console.log(err);
      }
    },

    async onSetDefault(id) {
      try {
        let response = await this.$axios.$put(`/api/addresses/set/default`, {
          id: id
        });

        if (response.success) {
          this.message = response.message;
          await this.$auth.fetchUser();
        }
      } catch (err) {
        this.message = err.message;
        console.log(err);
      }
    }
  }
};
</script>



