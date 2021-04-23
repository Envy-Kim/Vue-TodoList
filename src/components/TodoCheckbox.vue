<template>
  <div class="checkbox">
    <input type="checkbox"
           :id="_id"
           :value="value"
           :checked="_checked"
           @input="change"
    >
    <label :for="_id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "TodoCheckbox",
  model: {
    prop: 'inputValue',
    event: 'input',
  },
  props: {
    id: {
      type: String,
    },
    value: { // checkbox에 들어가는 value
      type: String,
    },
    inputValue: { // v-model과 매칭되는 value
      type: [String, Array, Boolean],
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    _id: function () {
      return (this.id) ? this.id : 'input-' + this._uid
    },
    _checked: function () {
      return (this.checked)
          ? this.checked
          : (typeof this.inputValue == 'boolean')
              ? this.inputValue
              : false
    }
  },
  methods: {
    change($event) {
      if (this.inputValue instanceof Array) {
        // 다중선택 체크박스인 경우 값을 배열로 반환

        // v-model과 연결된 value(Array)를 checkArr 배열에 할당
        let checkArr = this.inputValue

        // 선택된 체크박스의 값을 checkArr에 push
        if ($event.target.checked) {
          checkArr.push(this.value)
        } else {
          // 선택된 체크박스를 해제한 경우 checkArr에서 현재 체크박스의 값을 삭제
          checkArr.splice(checkArr.indexOf(this.value), 1)
        }
        this.$emit('input', checkArr)
      } else {
        // 다중선택이 아닌경우 true / false 반환
        this.$emit('input', $event.target.checked)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;

  input[type=checkbox] {
    + label {
      display: flex;
      align-items: center;

      &:before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }

    &:checked {
      + label {
        color: #fff;
        text-decoration-line: line-through;

        &:before {
          border: none;
          background: url('~@/assets/images/checkbox.svg') no-repeat 0 0 / cover;
          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(261deg) brightness(107%) contrast(102%);
        }
      }
    }
  }
}
</style>