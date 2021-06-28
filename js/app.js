var t1 = gsap.timeline({});
var t2 = gsap.timeline({});
var t3 = gsap.timeline({});

console.log(screen.width + 'x' + screen.height);

function doThis()
{
  var column1 = document.getElementById('column1').style.height;
  var column2 = document.getElementById('column2').style.height;
  var column3 = document.getElementById('column3').style.height;

  if(column1 == '150px' && column2 == '150px' && column3 == '150px')
  {
    if(!t2.isActive())
    {
      t2
      .add('scroll6', '+=.75')
      .to('#col2-are', {duration: 0.15, y: -25, opacity: 0, display: 'none', ease: 'power2.in'}, 'scroll6')
      .to('#col3-p9', {duration: 0.15, y: -25, opacity: 0, display: 'none', ease: 'power2.in'}, 'scroll6')
      .to('#col2-develop1', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-content', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

      .add('scroll1', '+=.75')
      .to('#col2-develop1', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.in'}, 'scroll1')
      .to('#col3-content', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.in'}, 'scroll1')
      .to('#col2-create1', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-media1', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

      .add('scroll2', '+=.75')
      .to('#col2-create1', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll2')
      .to('#col3-media1', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll2')
      .to('#col2-develop2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-business', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

      .add('scroll3', '+=.75')
      .to('#col2-develop2', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll3')
      .to('#col3-business', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll3')
      .to('#col2-trade', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-media2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

      .add('scroll4', '+=.75')
      .to('#col2-trade', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll4')
      .to('#col3-media2', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll4')
      .to('#col2-create2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-profit', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

      .add('scroll5', '+=.75')
      .to('#col2-create2', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll5')
      .to('#col3-profit', {duration: 0.15, y: -25, opacity: 0, ease: 'power2.out'}, 'scroll5')
      .to('.move-texts, #col2-are, #col3-p9', {duration: 0.15, y: 25, display: 'block', ease: 'power2.out'}, 'scroll5+=0.1')
      .to('#col2-are', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
      .to('#col3-p9', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})   
    }
  }
}

function myFunction()
{
  t1

  .add('g1')
  .to('#column1', {duration: 0.45, y: 0, x: 0, opacity: 1, ease: 'power2.out'}, 'g1')
  .to('#col1-we', {duration: 0.15, y: 0, x: 0, opacity: 1, ease: 'power2.out'})

  .to('body', {duration: 0.25, 'background': '#4a4e6c'}, 'g1+=0.25')

  .to('#column2', {duration: 0.45, y: 0, x: 0, opacity: 1, ease: 'power2.out'}, 'g1')
  .to('#col2-develop1', {duration: 0.15, y: 0, x: 0, opacity: 1, ease: 'power2.out'})

  .to('#column3', {duration: 0.45, y: 0, x: 0, opacity: 1, ease: 'power2.out'}, 'g1')
  .to('#col3-content', {duration: 0.15, x: 0, y: 0, opacity: 1, ease: 'power2.out'})

  .add('scroll1', '+=.75')
  .to('#col2-develop1', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.in'}, 'scroll1')
  .to('#col3-content', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.in'}, 'scroll1')
  .to('#col2-create1', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
  .to('#col3-media1', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

  .add('scroll2', '+=.75')
  .to('#col2-create1', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll2')
  .to('#col3-media1', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll2')
  .to('#col2-develop2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
  .to('#col3-business', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

  .add('scroll3', '+=.75')
  .to('#col2-develop2', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll3')
  .to('#col3-business', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll3')
  .to('#col2-trade', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
  .to('#col3-media2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

  .add('scroll4', '+=.75')
  .to('#col2-trade', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll4')
  .to('#col3-media2', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll4')
  .to('#col2-create2', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
  .to('#col3-profit', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

  .add('scroll5', '+=.75')
  .to('#col2-create2', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll5')
  .to('#col3-profit', {duration: 0.15, y: -100, opacity: 0, ease: 'power2.out'}, 'scroll5')
  .to('.move-texts', {duration: 0.15, y: 50, ease: 'power2.out'}, 'scroll5+=0.1')
  .to('#col2-are', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})
  .to('#col3-p9', {duration: 0.15, y: 0, opacity: 1, ease: 'power2.out'})

  .add('g1')
  .to('.row', {duration: 0.5, display: 'flex', justifyContent: 'center' }, 'g1')
  .to('.words, .are, .planetnine', {duration: 0.5, opacity: 1, fontSize: 20, ease: 'power2.in'}, 'g1')
  .to('.text-right', {duration: 0.5, fontSize: 20, ease: 'power2.in'}, 'g1')
  .to('#column1, #column2, #column3', {duration: 0.5, width: 510, height: 150, display: 'block', ease: 'power2.in' }, 'g1')
  .to('.introoo', {duration: 0.5, height: '20vh', top: 100, ease: 'power2.in' }, 'g1')
  .to('.services', {duration: 0.5, opacity: 1, stagger: .15, display: 'block', ease: 'power3.out'}, 'g1+=0.25')
  .to('#navbar', {duration: 0.5, top: 0, ease: 'power2.out'}, 'g1')

  .add('f1', '+=1')

  .to('#col1-we', {duration: 0.35, opacity: 1, ease: 'power2.in'}, 'f1')
  .to('#col2-are', {duration: 0.35, opacity: 1, ease: 'power2.in'}, 'f1')
  .to('#col3-p9', {duration: 0.35, opacity: 1, ease: 'power2.in'}, 'f1')
  .to('#column1', {duration: 0.45, 'background-color': '#fb2c38', ease: 'power0.none', stagger: 0.15}, 'f1')
  .to('#column2', {duration: 0.45, 'background-color': '#fdb348', ease: 'power0.none', stagger: 0.15}, 'f1')
  .to('#column3', {duration: 0.45, 'background-color': '#5d1755', ease: 'power0.none', stagger: 0.15}, 'f1')
}