<template>
  <section class="chart-container">
    <ul>
      <li v-for="(item,index) in users" :key="index">{{item.name}}</li>
    </ul>
    <counter></counter>计数器
    <button type="button" @click="decCount">-</button>
    <!-- {{total}} -->
    {{$store.state.counter.total}}
    <button type="button" @click="inCount">+</button>

    <br><br>
    
    商品金额：
    <button type="button" @click="deccarCount">-</button>
    
    {{$store.state.car.total}}
    <button type="button" @click="incarCount">+</button>
    
  </section>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import counter from "../../components/counter";

import { INC_COUNT, DEC_COUNT } from "../../store/modules/mutation-types"
export default {
  data() {
    return {
      value5: 3.7,
      num: 0,
      amount: 0
    };
  },
  computed: {
    // ...mapState(["total"])
    // ...mapState({ total: "total"})
    // 推荐
    ...mapState({
      total: state => state.total
    }),
    // ...mapGetters(["getUsers"])
    ...mapGetters({
      users: "getUsers"
    })
  },
  created() {
    this.$store.getters.getUsers;
  },
  methods: {
    // ...mapMutations(["INC_COUNT", "DEC_COUNT"]),
    // 推荐
    ...mapMutations({
      INC_COUNT: "counter/" + INC_COUNT,
      DEC_COUNT: "counter/" + DEC_COUNT
    }),
    // ...mapActions(["inTotal", "decTotal"]),
    ...mapActions({
      inTotal: "counter/inTotal",
      decTotal: "counter/decTotal"
    }),
    inCount() {
      // this.$store.commit("INC_COUNT", {total: ++this.num})
      // this.INC_COUNT({total: ++this.num});
      // this.$store.dispatch("inTotal", { total: ++this.num });
      this.inTotal({ total: ++this.num })
    },
    decCount() {
      // this.$store.commit("DEC_COUNT", {total: --this.num})
      // this.DEC_COUNT({total: ++this.num})
      // this.$store.dispatch("decTotal", { total: --this.num });
      this.decTotal({ total: --this.num })
    },
    deccarCount() {
      this.$store.commit("car/" + DEC_COUNT, { total: --this.amount })
    },
    incarCount() {
      this.$store.commit("car/" + INC_COUNT, { total: --this.amount })
    }
  },
  components: {
    counter
  }
};
</script>
<style>
.chart-container {
  background-color: #f2f2f2;
}
.show-section {
  margin: 10px;
  border-radius: 4px;
}

.show-section.top {
  background-color: white;
  padding: 10px;
  margin-top: 0;
}

.show-section span {
  font-weight: bold;
  font-size: 18px;
  color: #333333;
}
.el-rate {
  display: inline;
}
</style>
