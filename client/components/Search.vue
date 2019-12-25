<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="sbx-icon-search-11"
        viewBox="0 0 40 40"
      >
        <path
          d="M15.553 31.106c8.59 0 15.553-6.963 15.553-15.553S24.143 0 15.553 0 0 6.963 0 15.553s6.963 15.553 15.553 15.553zm0-3.888c6.443 0 11.665-5.222 11.665-11.665 0-6.442-5.222-11.665-11.665-11.665-6.442 0-11.665 5.223-11.665 11.665 0 6.443 5.223 11.665 11.665 11.665zM27.76 31.06c-.78-.78-.778-2.05.004-2.833l.463-.463c.783-.783 2.057-.78 2.834-.003l8.168 8.17c.782.78.78 2.05-.003 2.832l-.463.463c-.783.783-2.057.78-2.833.003l-8.17-8.167z"
          fill-rule="evenodd"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="sbx-icon-clear-2"
        viewBox="0 0 20 20"
      >
        <path
          d="M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z"
          fill-rule="evenodd"
        />
      </symbol>
    </svg>

    <form
      novalidate="novalidate"
      onsubmit="return false;"
      class="searchbox sbx-amazon"
    >
      <div role="search" class="sbx-amazon__wrapper">
        <input
          type="search"
          name="search"
          placeholder="Search your favourite product"
          autocomplete="off"
          required="required"
          class="sbx-amazon__input"
          v-model="query"
        />
        <button
          type="submit"
          title="Submit your search query."
          class="sbx-amazon__submit"
          @click="onSearch"
        >
          <svg role="img" aria-label="Search">
            <use xlink:href="#sbx-icon-search-11" />
          </svg>
        </button>
        <button
          type="reset"
          title="Clear the search query."
          class="sbx-amazon__reset"
        >
          <svg role="img" aria-label="Reset">
            <use xlink:href="#sbx-icon-clear-2" />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },

  methods: {
    onSearch() {
      this.$router.push({
        path: "/search",
        query: { title: this.query }
      });
    }
  }
};
</script>
