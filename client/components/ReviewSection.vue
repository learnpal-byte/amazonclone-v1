<template>
  <div>
    <hr />
    <div class="reviewsMedley">
      <div class="row">
        <div class="col-lg-4 col-md-5 col-sm-12">
          <!-- Total Customer reviews -->
          <a href="#" class="a-color-base">
            <h2>{{ product.reviews.length }} customer reviews</h2>
          </a>
          <div class="cr-widget-ACR">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>
              <a href="#">
                4.5 out of 5 stars
                <i class="a-icon a-icon-popover"></i>
              </a>
            </span>
          </div>
          <div class="cr-widget-histogram">
            <div class="row a-histogrm-row">
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap">
                  <a href="#">5 star</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-8 pr-0">
                <div>
                  <a href="#">
                    <div class="a-meter 5star">
                      <div class="a-meter-bar a-meter-filled" style="width: 64%;"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap text-right">
                  <a href="#">64%</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
            </div>
            <div class="row a-histogrm-row" style="margin-top: -15px;">
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap">
                  <a href="#">4 star</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-8 pr-0">
                <div>
                  <a href="#">
                    <div class="a-meter 5star">
                      <div class="a-meter-bar a-meter-filled" style="width: 14%;"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap text-right">
                  <a href="#">14%</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
            </div>
            <div class="row a-histogrm-row" style="margin-top: -15px;">
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap">
                  <a href="#">3 star</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-8 pr-0">
                <div>
                  <a href="#">
                    <div class="a-meter 5star">
                      <div class="a-meter-bar a-meter-filled" style="width: 4%;"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap text-right">
                  <a href="#">4%</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
            </div>
            <div class="row a-histogrm-row" style="margin-top: -15px;">
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap">
                  <a href="#">2 star</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-8 pr-0">
                <div>
                  <a href="#">
                    <div class="a-meter 5star">
                      <div class="a-meter-bar a-meter-filled" style="width: 0%;"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap text-right">
                  <a href="#">0%</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
            </div>
            <div class="row a-histogrm-row" style="margin-top: -15px;">
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap">
                  <a href="#">1 star</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
              <div class="col-md-8 col-sm-8 col-8 pr-0">
                <div>
                  <a href="#">
                    <div class="a-meter 5star">
                      <div class="a-meter-bar a-meter-filled" style="width: 4%;"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-2 col-sm-2 col-2 pr-0">
                <div class="aok-nowrap text-right">
                  <a href="#">4%</a>
                  <span class="a-letter-space"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="a-spacing-large" />
            </div>
          </div>
          <h3 class="a-spacing-micro">Review this product</h3>
          <div class="a-row a-spacing-large">Share your thoughts with other customers</div>
          <div class="a-row">
            <!-- Link to another Review page -->
            <span class="a-button-base writeReviewButton cm-cr-button-wide">
              <span class="a-button-inner">
                <nuxt-link
                  :to="`/reviews/${product._id}`"
                  class="a-button-text"
                >Write a customer review</nuxt-link>
              </span>
            </span>
          </div>
          <div class="clearfix">
            <div class="float-left">
              <hr class="mt-4 a-spacing-large" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-7 col-sm-12">
          <div class="reviews-image-gallery">
            <h3>Customer images</h3>
            <!-- Review Images -->
            <div class="a-spacing-small a-spacing-top-small">
              <img
                class="img-fluid"
                width="22.5%"
                v-for="review in reviews"
                :key="review._id"
                :src="review.photo"
              />
            </div>
            <div>
              <a href="#">See all customer images</a>
            </div>
          </div>
          <div class="cr-lighthut">
            <h3>Read reviews that mention</h3>
            <div class="cr-lighthouse-terms">
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">jeff bezos</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">everything store</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">brad stone</span>
                </a>
              </span>
              <br />
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">steve jobs</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">well written</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">great read</span>
                </a>
              </span>
              <br />
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">must read</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">great book</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">highly recomended</span>
                </a>
              </span>
              <br />
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">well searched</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">long term</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">barnes and noble</span>
                </a>
              </span>
              <span class="cr-lighthouse-span">
                <a href="#">
                  <span class="cr-lighthouse-term">sam walton</span>
                </a>
              </span>
            </div>
          </div>
          <div class="cr-widget-focalreviews">
            <div class="card-padding">
              <div class="review-header">
                <h3>
                  <span class="a-size-base">Showing 1-8 of {{ product.reviews.length }} reviews</span>
                </h3>
              </div>
              <div class="review-sort-type">
                <span class="a-dropdown-container">
                  <span class="a-button a-button-dropdown">
                    <span class="a-button-inner">
                      <span class="a-button-text">
                        <span class="a-dropdown-prompt">Top Reviews</span>
                      </span>
                      <i class="a-icon a-icon-dropdown"></i>
                    </span>
                  </span>
                </span>
              </div>

              <!-- Reviews -->
              <div class="review-body" v-for="review in reviews" :key="review._id">
                <div class="genome-widget">
                  <a href="#">
                    <div class="profile-avatar">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                      />
                    </div>
                    <!-- Review Owner -->
                    <div class="profile-content">
                      <span class="a-profile-name">{{ review.user.name }}</span>
                    </div>
                  </a>
                </div>
                <div class="a-row">
                  <!-- Review Star -->
                  <a href="#">
                    <i class="fas fa-star" v-for="i in review.rating" :key="i"></i>
                  </a>
                  <span class="a-letter-space"></span>
                  <!-- Review Headline -->
                  <a href="#" class="review-title">{{ review.headline }}</a>
                </div>
                <span class="review-date">June 28, 2016</span>
                <div class="review-data">
                  <span class="a-color-secondary">Format: Hardcover</span>
                  <div
                    style="width: 1px !important; height: 15px !important; background-color: #ddd; display: inline-block; margin: 0px 5px -3px 5px;"
                  ></div>
                  <span class="avp-badge a-color-state">Verified Purchase</span>
                </div>
                <!-- Review Body -->
                <div class="review-body">
                  <span>{{ review.body }}</span>
                </div>
                <div class="review-comments">
                  <div class="a-spacing-small">
                    <span class="a-size-base a-color-tertiary">60 people found this helpful</span>
                  </div>
                  <div class="cr-helpful-button">
                    <span class="a-button-base">
                      <span class="a-button-inner">
                        <a href="#" class="a-button-text">
                          <div class="cr-helpful-text">Helpful</div>
                        </a>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <!-- Reviews -->
            </div>
          </div>
          <div class="review-footer">
            <div class="a-row">
              <span class="a-button a-button-base writeReviewButton" id="a-autoid-15">
                <span class="a-button-inner">
                  <nuxt-link
                    :to="`/reviews/${product._id}`"
                    class="a-button-text"
                    role="button"
                  >Write a customer review</nuxt-link>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-0 col-sm-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "reviews"]
};
</script>