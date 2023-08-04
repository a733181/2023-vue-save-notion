import { defineStore } from 'pinia';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

// 彈出視窗
const useSwalStore = defineStore('swalStores', () => {
  function simpleError(context) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: context,
    });
  }

  function toastSimple(icon, context, position = 'top') {
    Swal.fire({
      icon,
      text: context,
      toast: true,
      position,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  }

  async function resCconfirmTip(text) {
    const result = await Swal.fire({
      text,
      icon: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#DC3545',
      cancelButtonColor: '#DADADA',
      confirmButtonText: '確定',
      cancelButtonText: '取消',
    });
    if (result.isConfirmed) {
      // 確定
      return true;
    } else if (result.isDismissed) {
      // 取消
      return false;
    }
  }

  return { simpleError, toastSimple, resCconfirmTip };
});

export default useSwalStore;
