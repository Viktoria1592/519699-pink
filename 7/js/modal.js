function modalMenu(){headerMainBtn.addEventListener("click",function(){headerMainBtn.classList.contains("header-main__popup-button--closed")?(headerMainBtn.classList.remove("header-main__popup-button--closed"),headerMainBtn.classList.add("header-main__popup-button--opened"),mainNav.classList.add("main-nav--opened"),logoMain.classList.add("header-main__logo--position"),titlePadding.classList.add("header-main__title--padding"),bgHeadPadding.classList.add("header-main__bg-hand--padding"),introBgPosition.classList.add("header-main__intro--bg-position")):(headerMainBtn.classList.remove("header-main__popup-button--opened"),headerMainBtn.classList.add("header-main__popup-button--closed"),mainNav.classList.remove("main-nav--opened"),logoMain.classList.remove("header-main__logo--position"),titlePadding.classList.remove("header-main__title--padding"),bgHeadPadding.classList.remove("header-main__bg-hand--padding"),introBgPosition.classList.remove("header-main__intro--bg-position"))})}function modalMessage(e,n,a){e.addEventListener("click",function(){e.classList.contains(n+"__button")&&a.classList.remove(n+"--closed")})}var headerMainBtn=document.querySelector(".header-main__popup-button"),mainNav=document.querySelector(".main-nav"),logoMain=document.querySelector(".header-main__logo"),popupError=document.querySelector(".popup-error"),popupDone=document.querySelector(".popup-done"),errorBtn=document.querySelector(".popup-error__button"),doneBtn=document.querySelector(".popup-done__button"),titlePadding=document.querySelector(".header-main__title--padding"),bgHeadPadding=document.querySelector(".header-main__bg-hand--padding"),introBgPosition=document.querySelector(".header-main__intro--bg-position");mainNav.classList.remove("main-nav--opened"),logoMain.classList.remove("header-main__logo--position"),titlePadding.classList.remove("header-main__title--padding"),headerMainBtn.classList.remove("header-main__popup-button--none"),bgHeadPadding.classList.remove("header-main__bg-hand--padding"),introBgPosition.classList.remove("header-main__intro--bg-position"),modalMenu(),modalMessage(doneBtn,"popup-done",popupDone),modalMessage(errorBtn,"popup-error",popupError);