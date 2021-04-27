<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-box">
        <button
            @click.self="$emit('close')"
            class="btn-close">닫기
        </button>
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TodoModal",
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 99999;

  .modal-box {
    position: relative;
    width: 60%;
    z-index: 9999;

    .btn-close {
      position: absolute;
      width: 14px;
      height: 14px;
      top: 20px;
      right: 20px;
      font-size: 0;
      transform: rotate(45deg);

      &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: #ee5753;
      }

      &::before {
        width: 2px;
        height: 100%;
      }

      &::after {
        width: 100%;
        height: 2px;
      }
    }

    .modal-content {
      padding: 35px 0;
      color: #000;
      background-color: #fff;
      border-radius: 25px;
    }
  }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;

  .modal-box {
    transition: opacity 0.3s, transform 0.3s;
  }
}

.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-box {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>