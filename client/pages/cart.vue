<template>
  <!--MAIN-->
  <main>
    <!--SHOPPING CART-->
    <div class="shopping-cart mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-lg-9 col-md-8 col-sm-7">
            <div class="c-section a-spacing-top-base">
              <div class="a-row sc-cart-header sc-compact-bottom">
                <h2>Shopping Cart</h2>
              </div>
              <form action="#" method="post">
                <div class="sc-list-head">
                  <div class="text-right a-spacing-top-micro">
                    <span class="a-color-secondary">Price</span>
                  </div>
                </div>
                <!-- List of the item -->
                <div class="sc-list-body" v-for="product in getCart" :key="product._id">
                  <div class="sc-list-item-border">
                    <div class="a-row a-spacing-top-base a-spacing-base">
                      <div class="row">
                        <!-- Product's Image -->
                        <div class="col-sm-2 col-2">
                          <a href="#" class="a-link-normal">
                            <img :src="product.photo" class="img-fluid w-100" />
                          </a>
                        </div>
                        <div class="col-sm-8 col-8">
                          <!-- Product's Title -->
                          <div class="a-spacing-mini">
                            <a
                              href="#"
                              class="a-link-normal a-size-medium a-text-bold"
                            >{{ product.title }}</a>
                            <!-- Product's Owner name -->
                            <span class="a-size-base sc-product-creator">{{ product.owner.name }}</span>
                          </div>
                          <div>
                            <span
                              class="a-size-small a-color-secondary sc-product-binding"
                            >Paperback</span>
                          </div>
                          <div>
                            <span
                              class="a-size-small a-color-success sc-product-availability"
                            >In Stock</span>
                          </div>
                          <div class="a-checkbox a-align-top a-size-small a-spacing-top-micro">
                            <label>
                              <input type="checkbox" name value />
                              <span class="a-checkbox-label">
                                This is a gift
                                <span class="a-size-small">
                                  <a href="#">
                                    <span class="a-size-small">Learn More</span>
                                  </a>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div class="sc-action-links">
                            <select @change="onChangeQuantity($event, product)">
                              <option
                                v-for="i in 10"
                                :key="i"
                                :value="i"
                                :selected="checkQty(product.quantity, i)"
                              >Qty: &nbsp;{{i}}</option>
                            </select>
                            &nbsp;&nbsp;
                            <span>|</span>
                            &nbsp;
                            <!-- Delete button -->
                            <span class="a-size-small">
                              <a href="#" @click="$store.commit('removeProduct', product)">Delete</a>
                            </span>
                            &nbsp;
                            &nbsp;
                          </div>
                        </div>
                        <div class="col-sm-2 col-2 tr sm-txt-r">
                          <!-- Product's Price -->
                          <p class="a-spacing-small">
                            <span
                              class="a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold"
                            >${{ product.price * product.quantity}}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- List of the item -->

                <div class="text-right">
                  <!-- Cart Subtotal -->
                  <p class="a-spacing-none a-spacing-top-mini">
                    <span class="a-size-medium">Subtotal ({{getCartLength}} item)</span>
                    <span class="a-color-price a-text-bold">
                      <!-- Cart Total Price -->
                      <span class="a-size-medium a-color-price">${{ getCartTotalPrice }}</span>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-5">
            <div class="a-box-group" style="margin-bottom: 14px;">
              <div class="a-box a-color-alternate-background">
                <div class="a-box-inner">
                  <div class="a-spacing-mini">
                    <p class="a-spacing-none a-spacing-top-none">
                      <!-- Cart Subtotal -->
                      <span class="a-size-medium">
                        <span>Subtotal ({{getCartLength}} item):</span>
                        <span class="a-color-price a-text-bold">
                          <!-- Cart Total Price  -->
                          <span class="a-size-medium a-color-price">${{ getCartTotalPrice }}</span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div class="a-spacing-base mt-1">
                    <input type="checkbox" name="checkbox" />
                    <span class="a-label a-checkbox-label">This order contains a gift</span>
                  </div>
                  <div>
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <a href="#" class="a-button-text">Proceed to checkout</a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recently Viewed -->
            <div class="a-spacing-large">
              <div class="a-box">
                <div class="a-box-inner">
                  <h5 class="a-spacing-base">Your recently viewed items</h5>
                  <div class="a-spacing-micro">
                    <ul class="a-unordered-list recently-viewed">
                      <li class="a-spacing-medium" v-for="i in 4" :key="i">
                        <span class="a-list-item">
                          <div class="row">
                            <div class="col-md-4 col-sm-3 col-3 pl-0">
                              <a href="#">
                                <img src="img/cartRecent4.png" class />
                              </a>
                            </div>
                            <div class="col-md-8 col-sm-9 col-9">
                              <a href="#" class="a-link-normal">The Everything Store:…</a>
                              <div class="a-size-small">
                                <a href="#" class="a-size-small a-link-child">Brad Stone</a>
                              </div>
                              <div class="a-icon-row a-spacing-none">
                                <a href="#">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star-half-alt"></i>
                                </a>
                                <a href="#">155</a>
                              </div>
                              <div class="a-size-small">
                                <span class="a-size-small a-color-secondary">Kindle Edition</span>
                              </div>
                              <div class="a-spacing-top-micro">
                                <span
                                  class="a-button-inspired a-spacing-top-none a-button-base a-button-small"
                                >
                                  <span class="a-button-inner">
                                    <a href="#" class="a-button-text">See all buying options</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/SHOPPING CART-->
  </main>
  <!--/MAIN-->
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart", "getCartTotalPrice", "getCartLength"])
  },
  methods: {
    onChangeQuantity(event, product) {
      let qty = parseInt(event.target.value);
      this.$store.commit("changeQty", { product, qty });
    },
    checkQty(prodQty, qty) {
      if (parseInt(prodQty) === parseInt(qty)) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>


