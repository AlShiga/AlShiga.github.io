document.addEventListener("DOMContentLoaded", () => {
  new Inputmask("+7 (999) 999-99-99").mask(
    document.querySelectorAll('input[type="tel"]')
  );
  document.addEventListener("mousemove", (e) => {
    if (document.documentElement.clientWidth >= 1000) {
      const X = e.pageX; // положения по оси X
      const Y = e.pageY; // положения по оси Y
      function Paralax(
        selector,
        sensX = 10,
        sensY = 10,
        invX = false,
        invY = false
      ) {
        const block = document.querySelector(selector);
        const blX = block.getBoundingClientRect().left; // положение блока по оси X
        const blY = block.getBoundingClientRect().top; // положение блока по оси Y
        const bWX = block.getBoundingClientRect().width; //ширина блока
        const bWY = block.getBoundingClientRect().height; //высота блока
        let smX = (X - (blX + bWX / 2)) / sensX;
        let smY = (Y - (blY + bWY / 2)) / sensY;
        if (invX) {
          smX = -smX;
        }
        if (invY) {
          smY = -smY;
        }
        block.style.cssText = `transform:translate( ${smX}px, ${smY}px)`;
      }
      Paralax(".rectContent", 50, 50);
      Paralax(".rectFeed1", 80, 80, false, false);
      Paralax(".rectFeed2", 40, 40, true, true);
    }
  });
});
