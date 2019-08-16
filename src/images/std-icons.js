(function() {
  var svgWrapper = document.createElement('div');
  svgWrapper.style.display = 'none';
  svgWrapper.innerHTML = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-all_questions" xmlns="http://www.w3.org/2000/svg"><title>all questions</title><path d="M448 42.67H149.33A21.33 21.33 0 0 0 128 64v298.67A21.33 21.33 0 0 0 149.33 384H448a21.33 21.33 0 0 0 21.33-21.33V64A21.33 21.33 0 0 0 448 42.67zm-21.33 298.66h-256v-256h256v256z"/><path d="M362.67 426.67H85.33V149.33a21.33 21.33 0 0 0-42.66 0V448A21.33 21.33 0 0 0 64 469.33h298.67a21.33 21.33 0 1 0 0-42.66zm-67.84-159.79a21.33 21.33 0 1 0 0 42.67 21.33 21.33 0 0 0 0-42.67zm-42.67-85.76c25.17 0 12.16-34.35 45.44-34.35a21.33 21.33 0 0 1 24.96 21.34c0 25.38-45.44 32.42-45.44 64a16.64 16.64 0 0 0 16.64 17.49c17.07 0 14.93-12.8 21.33-21.33 6.4-8.54 47.58-25.39 47.58-59.1 0-33.7-33.28-51.84-66.56-51.84s-61.44 22.4-61.44 48a15.57 15.57 0 0 0 17.49 15.79z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-answer" xmlns="http://www.w3.org/2000/svg"><title>answer</title><path d="M388.5 85.33h-265a38.16 38.16 0 0 0-38.17 38.16V388.5a38.16 38.16 0 0 0 38.17 38.17h265a38.16 38.16 0 0 0 38.17-38.17v-265a38.16 38.16 0 0 0-38.17-38.17zM234.67 362.67h-85.34a21.33 21.33 0 0 1 0-42.67h85.34a21.33 21.33 0 0 1 0 42.67zm128-85.34H149.33a21.33 21.33 0 1 1 0-42.66h213.34a21.33 21.33 0 1 1 0 42.66zm0-85.33H149.33a21.33 21.33 0 0 1 0-42.67h213.34a21.33 21.33 0 0 1 0 42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-arrow_double_down" xmlns="http://www.w3.org/2000/svg"><title>arrow-double-down</title><path d="M240.92 293.93a21.4 21.4 0 0 0 30.16 0l150.85-150.85a21.33 21.33 0 1 0-30.16-30.16L256 248.68 120.24 112.92a21.33 21.33 0 0 0-30.17 30.16l150.85 150.85z"/><path d="M391.77 240.92L256 376.68 120.24 240.91a21.33 21.33 0 1 0-30.17 30.17L240.9 421.93a21.4 21.4 0 0 0 30.17 0l150.85-150.85a21.33 21.33 0 1 0-30.16-30.16z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-arrow_down" xmlns="http://www.w3.org/2000/svg"><title>arrow-down</title><path d="M271.08 357.93l150.85-150.85a21.33 21.33 0 1 0-30.16-30.16L256 312.68 120.24 176.91a21.33 21.33 0 1 0-30.17 30.17L240.9 357.93a21.4 21.4 0 0 0 30.17 0z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-arrow_left" xmlns="http://www.w3.org/2000/svg"><title>arrow left</title><path d="M154.03 271.15l150.82 150.82a21.42 21.42 0 0 0 30.3-30.29L199.25 256l135.9-135.68a21.42 21.42 0 0 0-30.3-30.3L154.03 240.86a21.33 21.33 0 0 0 0 30.3z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-arrow_right" xmlns="http://www.w3.org/2000/svg"><title>arrow right</title><path d="M357.97 240.85L207.15 90.03a21.42 21.42 0 0 0-30.3 30.29L312.75 256l-135.9 135.68a21.42 21.42 0 0 0 30.3 30.3l150.82-150.83a21.33 21.33 0 0 0 0-30.3z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-arrow_up" xmlns="http://www.w3.org/2000/svg"><title>arrow up</title><path d="M240.92 154.07L90.07 304.92a21.33 21.33 0 0 0 30.17 30.16L256 199.32l135.76 135.77a21.33 21.33 0 0 0 30.17-30.17L271.1 154.07a21.4 21.4 0 0 0-30.17 0z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-ask_parent_to_pay" xmlns="http://www.w3.org/2000/svg"><title>ask parent to pay</title><circle cx="330.67" cy="208" r="58.67"/><path d="M330.67 296.1c-39.26 0-117.34 19.63-117.34 58.46V384H448v-29.44c0-38.83-78.08-58.45-117.33-58.45zm-96-50.77V138.67c0-5.9-4.78-10.67-10.67-10.67H74.67c-5.9 0-10.67 4.78-10.67 10.67v144.85a6.4 6.4 0 0 0 10.88 4.27L106.67 256H224c5.9 0 10.67-4.78 10.67-10.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-attachment" xmlns="http://www.w3.org/2000/svg"><title>attachment</title><path d="M429.5 127.78a85.4 85.4 0 0 0-120.7 0L173.03 263.56l-.01.03v-.01a53.34 53.34 0 1 0 75.45 75.4l105.58-105.6a21.33 21.33 0 1 0-30.17-30.16L218.3 308.79v.02a10.67 10.67 0 0 1-15.1-15.1l135.77-135.76v-.01a42.67 42.67 0 0 1 60.38 60.33l-.04.02-158.38 158.38a74.67 74.67 0 1 1-105.6-105.58l83.44-83.44a20.72 20.72 0 0 0 0-29.22l-.96-.95a20.72 20.72 0 0 0-29.21 0l-83.93 83.92c-.17.17-.22.4-.38.58-45.07 46.12-44.44 119.97 1.4 165.32 45.85 45.35 119.71 45.17 165.34-.4l.06-.04 158.39-158.4h.01a85.48 85.48 0 0 0 0-120.68z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-bold" xmlns="http://www.w3.org/2000/svg"><title>bold</title><path d="M332.8 251.53A77.67 77.67 0 0 0 368 192a84.11 84.11 0 0 0-85.33-85.34h-112A21.4 21.4 0 0 0 149.33 128v256a21.4 21.4 0 0 0 21.34 21.33h123.3a84.53 84.53 0 0 0 84.7-80.43 79.36 79.36 0 0 0-45.87-73.38zM213.33 160h64a32 32 0 1 1 0 64h-64v-64zM288 352h-74.67v-64H288a32 32 0 1 1 0 64z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-bulleted_list" xmlns="http://www.w3.org/2000/svg"><title>bulleted list</title><path d="M405.33 234.66H192a21.33 21.33 0 0 0 0 42.67h213.33a21.33 21.33 0 0 0 0-42.67zM192 149.33h213.33a21.33 21.33 0 0 0 0-42.67H192a21.33 21.33 0 0 0 0 42.67zm213.33 213.33H192a21.33 21.33 0 0 0 0 42.67h213.33a21.33 21.33 0 0 0 0-42.67z"/><circle cx="96" cy="127.99" r="32"/><circle cx="96" cy="255.99" r="32"/><circle cx="96" cy="383.99" r="32"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-camera" xmlns="http://www.w3.org/2000/svg"><title>camera</title><circle cx="256" cy="277.34" r="53.33"/><path d="M392.57 149.34h-43.14a19.53 19.53 0 0 1-13.82-5.72l-28.34-28.34a29.38 29.38 0 0 0-20.77-8.6h-61c-7.79 0-15.26 3.09-20.77 8.6l-28.34 28.34a19.53 19.53 0 0 1-13.81 5.72h-43.11a33.07 33.07 0 0 0-34.13 31.96v192.04a33.06 33.06 0 0 0 34.1 32h273.09a33.07 33.07 0 0 0 34.14-31.97V181.34a33.07 33.07 0 0 0-34.1-32zM256 362.67a85.33 85.33 0 1 1 0-170.66 85.33 85.33 0 0 1 0 170.66z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-check" xmlns="http://www.w3.org/2000/svg"><title>check</title><path d="M407.32 155.56a21.4 21.4 0 0 0-30.17 0L211.2 321.49l-75.42-75.42a21.33 21.33 0 1 0-30.17 30.17l90.5 90.5a21.4 21.4 0 0 0 30.18 0l181.02-181.01a21.4 21.4 0 0 0 0-30.17z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-close" xmlns="http://www.w3.org/2000/svg"><title>close</title><path d="M120.32 150.4l242.35 241.28a21.33 21.33 0 1 0 29.01-29.01L150.4 120.32a21.33 21.33 0 0 0-30.08 30.08z"/><path d="M362.67 120.32L120.32 362.67a21.33 21.33 0 1 0 30.08 30.08L391.68 150.4a21.33 21.33 0 1 0-29.01-30.08z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-counter" xmlns="http://www.w3.org/2000/svg"><title>counter</title><path d="M255.8 64a192 192 0 1 0 .4 384 192 192 0 0 0-.4-384zm85.5 213.3H256a21.4 21.4 0 0 1-21.3-21.3V149.3a21.3 21.3 0 1 1 42.6 0v85.4h64a21.3 21.3 0 1 1 0 42.6z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-credit_card" xmlns="http://www.w3.org/2000/svg"><title>credit card</title><path d="M85.33 352a33.07 33.07 0 0 0 34.1 32h273.1a33.07 33.07 0 0 0 34.14-31.97v-10.7H85.33V352zm307.24-224h-273.1a33.07 33.07 0 0 0-34.14 31.96v138.71h341.34V160a33.07 33.07 0 0 0-34.1-32zm-157.9 106.67h-85.34a21.33 21.33 0 0 1 0-42.67h85.34a21.33 21.33 0 0 1 0 42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-equation" xmlns="http://www.w3.org/2000/svg"><title>equation</title><path d="M426.65 106.67H206.21a21.31 21.31 0 0 0-20.23 14.59l-65.1 195.27-15.31-45.94a21.33 21.33 0 0 0-40.46 13.5l35.54 106.67a21.32 21.32 0 0 0 40.46 0l80.48-241.42h205.06a21.33 21.33 0 0 0 0-42.67z"/><path d="M399.1 226.94a21.4 21.4 0 0 0-30.17 0l-45.26 45.25-45.25-45.25a21.33 21.33 0 0 0-30.17 30.17l45.25 45.25-45.25 45.26a21.33 21.33 0 0 0 30.17 30.17l45.25-45.26 45.26 45.26a21.33 21.33 0 0 0 30.17-30.17l-45.26-45.26 45.26-45.25a21.4 21.4 0 0 0 0-30.17z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-excellent" xmlns="http://www.w3.org/2000/svg"><title>excellent</title><path d="M417.9 182.2a42.56 42.56 0 0 0-25.99 66.42l-40.46 28.66-80.6-88.09a42.67 42.67 0 1 0-29.7 0l-80.6 88.09-40.46-28.66a43.46 43.46 0 1 0-25 16.82l29.03 123.4a21.4 21.4 0 0 0 20.82 16.5h222.12a21.4 21.4 0 0 0 20.82-16.5l29.04-123.4a42.64 42.64 0 1 0 .98-83.23z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-exclamation_mark" xmlns="http://www.w3.org/2000/svg"><title>exclamation mark</title><path d="M256 106.67a32.1 32.1 0 0 0-32 32V288a32 32 0 1 0 64 0V138.67a32.1 32.1 0 0 0-32-32z"/><circle cx="256" cy="394.67" r="32"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-facebook" xmlns="http://www.w3.org/2000/svg"><title>facebook</title><path d="M448 256a192 192 0 1 0-221.9 189.6V311.4h-49V256h49v-42.3c0-48 28.5-74.8 72.4-74.8 21 0 42.7 4 42.7 4v46.9h-24.1c-24 0-31.4 15-31.4 30v36H339l-8.5 55.4h-44.8v134.2A191.4 191.4 0 0 0 448 256z" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-friends" xmlns="http://www.w3.org/2000/svg"><title>friends</title><path d="M181.3 277.3c49.7 0 138.7 25 138.7 74.7v32c0 11.8-9.6 21.3-21.3 21.3H64A21.4 21.4 0 0 1 42.7 384v-32c0-49.7 89-74.7 138.6-74.7zm181.3 108.3V352c0-33.4-18.2-56-46.1-70.8 12.7-2.6 25.1-3.9 35.5-3.9 42 0 117.3 21.2 117.3 63.2v27c0 10-8 18.1-18 18.1h-88.7zm-181.3-151a74.4 74.4 0 0 1-74.6-74.6 74.7 74.7 0 1 1 74.6 74.7zm170.7 0a63.7 63.7 0 0 1-64-64 64 64 0 1 1 64 64z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-heading" xmlns="http://www.w3.org/2000/svg"><title>heading</title><path d="M53.33 138.67a31.96 31.96 0 0 0 32 32H160v224a32 32 0 1 0 64 0v-224h74.67a32 32 0 1 0 0-64H85.33a31.96 31.96 0 0 0-32 32zm373.34 74.66h-128a32 32 0 1 0 0 64h32v117.34a32 32 0 1 0 64 0V277.33h32a32 32 0 1 0 0-64z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-heart" xmlns="http://www.w3.org/2000/svg"><title>heart</title><path d="M281.9 438.01a38.09 38.09 0 0 1-51.62-.19l-2.12-1.93C127.4 344 61.57 283.86 64.06 208.8a105.8 105.8 0 0 1 44.92-82.98 110.63 110.63 0 0 1 147.01 21.27 110.43 110.43 0 0 1 147.02-21.27 105.8 105.8 0 0 1 44.91 82.98c2.69 75.05-63.33 135.2-164.1 227.46L281.9 438z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-image" xmlns="http://www.w3.org/2000/svg"><title>image</title><path d="M405.32 64H106.66a42.67 42.67 0 0 0-42.67 42.67v298.67a42.67 42.67 0 0 0 42.67 42.67h298.66A42.67 42.67 0 0 0 448 405.34V106.67a42.67 42.67 0 0 0-42.67-42.66zm0 341.34H106.66V106.67h298.66v298.67z"/><path d="M174.98 362.67H337a10.63 10.63 0 0 0 7.51-18.14l-38.34-38.34a10.63 10.63 0 0 0-15.03 0L277.32 320l-35.15-35.15a10.63 10.63 0 0 0-15.03 0l-59.67 59.67a10.63 10.63 0 0 0 7.51 18.14z"/><circle cx="319.99" cy="192.01" r="42.67"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-instagram" xmlns="http://www.w3.org/2000/svg"><title>instagram</title><path d="M381.5 153.5a23 23 0 1 1-46 0 23 23 0 0 1 46 0M256 320a64 64 0 1 1 0-128 64 64 0 0 1 0 128m0-162.6a98.6 98.6 0 1 0 0 197.2 98.6 98.6 0 0 0 0-197.2m0-93.4c-52.1 0-58.7.2-79.2 1.2a141 141 0 0 0-46.6 8.9 94.1 94.1 0 0 0-34 22.1 94 94 0 0 0-22.1 34 141 141 0 0 0-9 46.6c-.9 20.5-1.1 27-1.1 79.2 0 52.1.2 58.7 1.2 79.2a141 141 0 0 0 8.9 46.6 94.1 94.1 0 0 0 22.1 34 94.1 94.1 0 0 0 34 22.1 141 141 0 0 0 46.6 9c20.5.9 27 1.1 79.2 1.1 52.1 0 58.7-.2 79.2-1.2 20.4-.9 34.4-4.1 46.6-8.9a94.1 94.1 0 0 0 34-22.1 94.2 94.2 0 0 0 22.1-34 141 141 0 0 0 9-46.6c.9-20.5 1.1-27 1.1-79.2 0-52.1-.2-58.7-1.2-79.2a141 141 0 0 0-8.9-46.6 94.1 94.1 0 0 0-22.1-34 94.1 94.1 0 0 0-34-22.1c-12.2-4.8-26.2-8-46.6-9-20.5-.9-27-1.1-79.2-1.1m0 34.6c51.3 0 57.3.2 77.6 1.1 18.7.9 28.9 4 35.6 6.6 9 3.5 15.4 7.7 22.1 14.4a59.5 59.5 0 0 1 14.4 22c2.6 6.8 5.7 17 6.6 35.7 1 20.3 1.1 26.3 1.1 77.6s-.2 57.3-1.1 77.6c-.9 18.7-4 28.9-6.6 35.6-3.5 9-7.7 15.4-14.4 22.1a59.5 59.5 0 0 1-22 14.4c-6.8 2.6-17 5.7-35.7 6.6-20.3 1-26.3 1.1-77.6 1.1s-57.3-.2-77.6-1.1c-18.7-.9-28.9-4-35.6-6.6-9-3.5-15.4-7.7-22.1-14.4a59.5 59.5 0 0 1-14.4-22c-2.6-6.8-5.7-17-6.6-35.7-1-20.3-1.1-26.3-1.1-77.6s.2-57.3 1.1-77.6c.9-18.7 4-28.9 6.6-35.6 3.5-9 7.7-15.4 14.4-22.1a59.5 59.5 0 0 1 22-14.4c6.8-2.6 17-5.7 35.7-6.6 20.3-1 26.3-1.1 77.6-1.1" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-italic" xmlns="http://www.w3.org/2000/svg"><title>italic</title><path d="M213.33 138.67a31.96 31.96 0 0 0 32 32h15.15l-72.96 170.67H160a32 32 0 1 0 0 64h106.67a32 32 0 1 0 0-64h-15.15l72.96-170.67H352a32 32 0 1 0 0-64H245.33a31.96 31.96 0 0 0-32 32z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-less" xmlns="http://www.w3.org/2000/svg"><title>less</title><path d="M256 64C149.96 64 64 149.98 64 256c0 106.05 85.96 192 192 192s192-85.95 192-192c0-106.03-85.96-192-192-192zm0 341.34c-82.47 0-149.33-66.86-149.33-149.33 0-82.48 66.86-149.34 149.33-149.34 82.48 0 149.34 66.86 149.34 149.34-.1 82.43-66.9 149.24-149.34 149.33z"/><path d="M316.34 195.67a21.4 21.4 0 0 0-30.17 0L256 225.84l-30.17-30.17a21.33 21.33 0 1 0-30.17 30.17L225.83 256l-30.17 30.17a21.33 21.33 0 1 0 30.17 30.17L256 286.18l30.17 30.17a21.33 21.33 0 1 0 30.17-30.17L286.17 256l30.17-30.17a21.4 21.4 0 0 0 0-30.17z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-linkedin" xmlns="http://www.w3.org/2000/svg"><title>linkedin</title><path d="M167 436.2H91.8V195H167v241.3zM130.8 162a43.7 43.7 0 1 1 42-43.7c0 24-19.4 43.5-43.4 43.7h1.4zm316.5 274.2h-74.8V318.8c0-27.8 0-64-39-64s-44.8 30.4-44.8 61.8v119.6h-74.8V195h72.3v32.9a79.5 79.5 0 0 1 72.2-38.7c75.5 0 89.6 49.9 89.6 114.5l-.7 132.6z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-lock_with_play" xmlns="http://www.w3.org/2000/svg"><title>lock with play</title><path d="M170.67 224.6v-58.48c0-44.98 38.54-80.79 85.33-80.79 46.8 0 85.33 35.8 85.33 80.79a21.33 21.33 0 1 1-42.66 0c0-20.69-18.77-38.12-42.67-38.12-23.9 0-42.67 17.43-42.67 38.12v33.16A127.8 127.8 0 0 1 256 192c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128c0-37.9 16.48-71.97 42.67-95.4zm141.28 103.63a8.96 8.96 0 0 0 0-15.73l-79.72-46.08a8.96 8.96 0 0 0-13.53 8.6v91.43a8.96 8.96 0 0 0 13.53 7.86l79.72-46.08z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-logout" xmlns="http://www.w3.org/2000/svg"><title>logout</title><path d="M320 234.7V320h42.7v66.7c0 10.3-8.8 18.6-19.6 18.7h-65.8v33.1a21.3 21.3 0 0 1-28.8 20l-128-48a21.3 21.3 0 0 1-13.8-20V82.7c0-10.3 8.7-18.7 19.5-18.7h217c10.7 0 19.5 8.4 19.5 18.7v66.6H320v85.4c0-11.8 9.6-21.3 21.3-21.3l53.7.1-8.8-8.8a21.3 21.3 0 0 1 30.1-30.2l45.3 45.3a21.3 21.3 0 0 1 0 30.1l-45.3 45.3a21.3 21.3 0 1 1-30.1-30.2l8.8-8.8-53.7-.1a21.3 21.3 0 0 1-21.3-21.4zm-42.7 128H320v-256H192l73.5 36.7c7.3 3.7 11.8 11 11.8 19.1v200.2z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-medium" xmlns="http://www.w3.org/2000/svg"><title>medium</title><path d="M448 113.2l-30.7 29.6a8.8 8.8 0 0 0-3.5 8.8v217.3c-.6 3.4.7 6.8 3.5 8.9l30 29.5v6.6H297v-6.6l31-30.3c3.2-3 3.2-3.8 3.2-8.4V192.3l-86.8 221.6h-12l-101-221.6v148.2a20 20 0 0 0 5.5 17l42.2 49v7.4H64v-6.2l38.4-50.3a19.6 19.6 0 0 0 5-16.9V169.3c.5-4.8-1.3-9.6-5-12.7l-35-43.4v-6.5h111.8l87.2 192 76.8-190.1H448v4.6z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-menu" xmlns="http://www.w3.org/2000/svg"><title>menu</title><path d="M85.33 149.33a21.33 21.33 0 0 0 18.99 21.34h303.36a21.33 21.33 0 0 0 18.99-21.34A21.33 21.33 0 0 0 407.68 128H104.32a21.33 21.33 0 0 0-18.99 21.33zm18.99 128h303.36a21.33 21.33 0 1 0 0-42.66H104.32a21.33 21.33 0 1 0 0 42.66zm0 106.67h303.36a21.33 21.33 0 1 0 0-42.67H104.32a21.33 21.33 0 0 0 0 42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-messages" xmlns="http://www.w3.org/2000/svg"><title>messages</title><path d="M341.3 266.7a33 33 0 0 1-34.1 32H128L89.6 337A15 15 0 0 1 64 326.6V117.3a33 33 0 0 1 34.1-32h209.1a33 33 0 0 1 34.1 32v149.4zM192 341.3h138.7A53.3 53.3 0 0 0 384 288v-74.6h29.9a33 33 0 0 1 34.1 32v187.9a15 15 0 0 1-25.6 10.5L384 405.4H226.1a33 33 0 0 1-34.1-32v-32z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-mic" xmlns="http://www.w3.org/2000/svg"><title>mic</title><path d="M384 234.67a21.32 21.32 0 0 0-21.34 21.34c0 58.9-47.75 106.66-106.66 106.66s-106.67-47.75-106.67-106.66a21.33 21.33 0 0 0-42.67 0c0 82.47 66.86 149.33 149.34 149.33 82.47 0 149.33-66.86 149.33-149.33A21.32 21.32 0 0 0 384 234.67z"/><path d="M256 320a64 64 0 0 0 64-63.99v-128a64 64 0 1 0-128 0v128a64 64 0 0 0 64 64zm64 106.67H192a21.33 21.33 0 0 0 0 42.67h128a21.33 21.33 0 0 0 0-42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-money_transfer" xmlns="http://www.w3.org/2000/svg"><title>money transfer</title><circle cx="298.84" cy="298.88" r="21.33"/><path d="M426.84 181.54a33.22 33.22 0 0 0-34.13-32h-115.2v42.67a21.33 21.33 0 0 1-42.67 0v-42.67h-115.2a33.22 33.22 0 0 0-34.13 32v192a33.22 33.22 0 0 0 34.13 32h273.07a33.22 33.22 0 0 0 34.13-32v-32h-128a42.67 42.67 0 0 1 0-85.33h128v-74.67z"/><path d="M277.51 115.71l8.83 8.83a21.33 21.33 0 1 0 30.17-30.16l-45.25-45.25a21.32 21.32 0 0 0-30.16-.01l-45.26 45.26a21.33 21.33 0 1 0 30.17 30.16l8.83-8.83v33.83h42.67v-33.83z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-more" xmlns="http://www.w3.org/2000/svg"><title>more</title><path d="M256 64C149.96 64 64 149.98 64 256c0 106.05 85.96 192 192 192s192-85.95 192-192c0-106.03-85.96-192-192-192zm0 341.34c-82.47 0-149.33-66.86-149.33-149.33 0-82.48 66.86-149.34 149.33-149.34 82.48 0 149.33 66.86 149.33 149.34-.09 82.43-66.9 149.24-149.33 149.33z"/><path d="M320 234.67h-42.67v-42.66a21.33 21.33 0 0 0-42.66 0v42.66H192a21.33 21.33 0 0 0 0 42.67h42.67v42.67a21.33 21.33 0 1 0 42.66 0v-42.67H320a21.33 21.33 0 0 0 0-42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-notifications" xmlns="http://www.w3.org/2000/svg"><title>notifications</title><path d="M256 469.3a42.8 42.8 0 0 0 42.7-42.6h-85.4a42.7 42.7 0 0 0 42.7 42.6zM384 320v-74.7c0-65.5-35-120.3-96-134.8V96a32 32 0 1 0-64 0v14.5c-61.2 14.5-96 69.1-96 134.8V320l-27.5 27.5a21.3 21.3 0 0 0 15 36.5h280.9a21.4 21.4 0 0 0 15.1-36.5L384 320z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-numbered_list" xmlns="http://www.w3.org/2000/svg"><title>numbered list</title><path d="M405.33 234.67H192a21.33 21.33 0 1 0 0 42.66h213.33a21.33 21.33 0 1 0 0-42.66zM192 149.33h213.33a21.33 21.33 0 1 0 0-42.66H192a21.33 21.33 0 1 0 0 42.66zm213.33 213.34H192a21.33 21.33 0 1 0 0 42.66h213.33a21.33 21.33 0 1 0 0-42.66zm-330.66-256h10.66V160a10.67 10.67 0 0 0 21.34 0V96A10.7 10.7 0 0 0 96 85.33H74.67a10.67 10.67 0 1 0 0 21.34zm42.66 234.66H74.67a10.67 10.67 0 0 0 0 21.34h32v10.66H96a10.67 10.67 0 0 0 0 21.34h10.67v10.66h-32a10.67 10.67 0 0 0 0 21.34h42.66A10.7 10.7 0 0 0 128 416v-64a10.7 10.7 0 0 0-10.67-10.67zm.05-128H74.67a10.67 10.67 0 0 0 0 21.34h32c-.01 5.88-4.78 10.66-10.67 10.66a32.03 32.03 0 0 0-32 32v10.57c0 5.95 4.82 10.77 10.77 10.77h42.56a10.67 10.67 0 0 0 0-21.34h-32c.01-5.88 4.78-10.66 10.67-10.66a32.03 32.03 0 0 0 32-32v-10.72a10.61 10.61 0 0 0-10.62-10.62z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-pencil" xmlns="http://www.w3.org/2000/svg"><title>pencil</title><path d="M64 372.48v64.85A10.57 10.57 0 0 0 74.67 448h64.85c2.83.04 5.54-1.13 7.47-3.2l232.96-232.75-80-80L67.2 364.8c-2.08 2-3.24 4.79-3.2 7.68zm377.81-222.3a21.25 21.25 0 0 0 0-30.07L391.9 70.19a21.25 21.25 0 0 0-30.08 0l-39.04 39.04 80 80 39.04-39.04z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-play" xmlns="http://www.w3.org/2000/svg"><title>play</title><path d="M389.18 228.75c7.1 4 11.88 9.56 14.32 16.68a31.99 31.99 0 0 1 0 21.34c-2.44 7.11-7.22 12.67-14.32 16.67L154.64 422.16a30 30 0 0 1-21.32 4 32.13 32.13 0 0 1-19-10.66c-5.1-5.78-7.65-12.68-7.65-20.68V117.38c0-8.9 2.66-16.12 8-21.68a32.69 32.69 0 0 1 19.31-10c7.56-1.12 14.44.33 20.66 4.33l234.54 138.72z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-plus" xmlns="http://www.w3.org/2000/svg"><title>plus</title><path d="M405.33 234.67h-128v-128a21.33 21.33 0 1 0-42.66 0v128h-128a21.33 21.33 0 1 0 0 42.66h128v128a21.33 21.33 0 1 0 42.66 0v-128h128a21.33 21.33 0 1 0 0-42.66z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-points" xmlns="http://www.w3.org/2000/svg"><title>points</title><path d="M282.4 215.9a16.52 16.52 0 0 0 6.48-13.82 11.42 11.42 0 0 0-6.47-11.88c-4.84-2.43-8.07-1.86-16.16-.46l-14.55 2.54v32.5l14.55-2.52a27.9 27.9 0 0 0 16.16-6.36zm-6.45 53.45l-24.25 4.2v35.74l24.25-4.2a28.1 28.1 0 0 0 16.16-7.05 18.35 18.35 0 0 0 6.47-14.78 12.84 12.84 0 0 0-6.47-12.85 22.06 22.06 0 0 0-16.16-1.06z"/><path d="M256 42.67c-117.82 0-213.33 95.5-213.33 213.33 0 117.82 95.5 213.33 213.33 213.33 117.82 0 213.33-95.5 213.33-213.33A213.33 213.33 0 0 0 256 42.67zm91.04 289.67a128.25 128.25 0 0 1-58.16 24.74l-131.01 22.67v-52.99l21.1-3.53v-118.3l-21.1 3.54v-52.99l113.23-19.57c18.59-4.03 37.76-4.6 56.56-1.7a41.66 41.66 0 0 1 32.97 43.01 66.33 66.33 0 0 1-31.36 55.18 43.58 43.58 0 0 1 42.7 45.26 66.72 66.72 0 0 1-24.93 54.68z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-profile" xmlns="http://www.w3.org/2000/svg"><title>profile</title><circle cx="256" cy="170.67" r="85.33"/><path d="M256 298.67c-94.02 0-170.26 38.02-170.63 84.99a212.75 212.75 0 0 0 341.26 0c-.37-46.97-76.6-85-170.63-85z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-profile_view" xmlns="http://www.w3.org/2000/svg"><title>profile_view</title><path d="M256 298.7c61.2 0 170.7 30.4 170.7 90.9v37c0 11.8-9.6 21.4-21.4 21.4H106.7a21.3 21.3 0 0 1-21.4-21.3v-37.1c0-60.5 109.5-91 170.7-91zm0-42.7a85 85 0 0 1-85.3-85.3A85.3 85.3 0 1 1 256 256z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-question" xmlns="http://www.w3.org/2000/svg"><title>question mark</title><path d="M469.3 256a213.3 213.3 0 1 1-426.6 0 213.3 213.3 0 0 1 426.6 0zm-256-64a42.7 42.7 0 1 1 61.2 38.5 69.9 69.9 0 0 0-39.8 62.8 21.3 21.3 0 1 0 42.6 0c0-10.3 6-19.8 15.7-24.4A85.3 85.3 0 1 0 170.7 192a21.3 21.3 0 1 0 42.6 0zM256 405.3a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-recent_questions" xmlns="http://www.w3.org/2000/svg"><title>recent questions</title><path d="M376.75 177.92a171.95 171.95 0 0 0-99.42-48.43V85.33h21.34a21.33 21.33 0 0 0 0-42.66h-85.34a21.33 21.33 0 0 0 0 42.66h21.34v44.16a171.95 171.95 0 0 0-99.42 48.43 21.42 21.42 0 0 0 30.3 30.3 128 128 0 1 1 0 180.9 21.42 21.42 0 0 0-30.3 30.3c66.69 66.68 174.81 66.68 241.5 0 66.68-66.7 66.68-174.81 0-241.5z"/><path d="M213.33 341.33A21.33 21.33 0 0 0 192 320H64a21.33 21.33 0 0 0 0 42.67h128a21.33 21.33 0 0 0 21.33-21.34zM64 277.33h170.67a21.33 21.33 0 1 0 0-42.66H64a21.33 21.33 0 1 0 0 42.66z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-reload" xmlns="http://www.w3.org/2000/svg"><title>reload</title><g fill-rule="evenodd" stroke-linecap="round" stroke="#000" stroke-width="42.7"><path d="M408 178.1a170.7 170.7 0 1 0 17.6 96.8"/><path stroke-linejoin="round" d="M426.7 106.7V192h-85.4"/></g></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-report_flag" xmlns="http://www.w3.org/2000/svg"><title>report flag</title><path d="M405.33 128H307.2l-5.12-25.6a21.29 21.29 0 0 0-20.9-17.07H128a21.4 21.4 0 0 0-21.33 21.34v320a21.33 21.33 0 1 0 42.66 0v-128H268.8l5.12 25.6a21.08 21.08 0 0 0 20.9 17.06h110.51A21.4 21.4 0 0 0 426.67 320V149.33A21.4 21.4 0 0 0 405.33 128zM192 234.67a21.33 21.33 0 0 1-42.67 0v-85.34a21.33 21.33 0 0 1 42.67 0v85.34z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-rotate" xmlns="http://www.w3.org/2000/svg"><title>rotate</title><path d="M378.6 149.3a149.2 149.2 0 0 0-261 29.4 21.3 21.3 0 1 1-39.6-16A192 192 0 0 1 405.3 114V85.3a21.3 21.3 0 0 1 42.7 0v85.4c0 11.7-9.6 21.3-21.3 21.3h-85.4a21.3 21.3 0 0 1 0-42.7h37.3zM224.3 411.1L192 362.7l-42.7 64h213.4L288 320l-63.7 91zM106.7 256h298.6v213.3H106.7V256z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-search" xmlns="http://www.w3.org/2000/svg"><title>search</title><path d="M420.48 390.19l-87.68-87.47c46.94-62.72 37.43-151.05-21.77-202.34-59.2-51.3-147.99-48.13-203.38 7.27-55.4 55.39-58.57 144.17-7.27 203.38 51.3 59.2 139.62 68.7 202.34 21.77l87.47 87.68a21.42 21.42 0 0 0 30.29-30.3zM213.33 320c-58.9 0-106.66-47.76-106.66-106.67 0-58.9 47.75-106.66 106.66-106.66S320 154.42 320 213.33A106.67 106.67 0 0 1 213.33 320z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-seen" xmlns="http://www.w3.org/2000/svg"><title>seen</title><path d="M256 106.67A234.61 234.61 0 0 0 42.67 256 234.61 234.61 0 0 0 256 405.33 234.6 234.6 0 0 0 469.33 256 234.6 234.6 0 0 0 256 106.67zm0 234.66a85.33 85.33 0 1 1 0-170.66 85.33 85.33 0 0 1 0 170.66z"/><circle cx="256" cy="256" r="53.33"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-settings" xmlns="http://www.w3.org/2000/svg"><title>settings</title><path d="M169.4 147.7c10.8-8.7 23-15.7 36-20.9l5.6-44.1A21.3 21.3 0 0 1 232.2 64h47.6c10.8 0 19.9 8 21.2 18.7l5.5 44.1a138.5 138.5 0 0 1 36 20.9l41-17.3c10-4.2 21.5-.4 26.9 9l23.8 41.2c5.4 9.4 3 21.2-5.6 27.7L393 235.2a139.8 139.8 0 0 1 0 41.6l35.5 26.9c8.6 6.5 11 18.3 5.6 27.7l-23.8 41.2a21.3 21.3 0 0 1-26.8 9l-41-17.3c-10.8 8.7-23 15.7-36 20.9l-5.6 44.1a21.3 21.3 0 0 1-21.2 18.7h-47.6c-10.8 0-19.9-8-21.2-18.7l-5.5-44.1a138.5 138.5 0 0 1-36-20.9l-41 17.3c-10 4.2-21.5.4-26.9-9l-23.8-41.2c-5.4-9.4-3-21.2 5.6-27.7l35.5-26.9a139.8 139.8 0 0 1 0-41.6l-35.5-26.9a21.3 21.3 0 0 1-5.6-27.7l23.8-41.2a21.3 21.3 0 0 1 26.8-9l41 17.3zM256 320a64 64 0 1 0 0-128 64 64 0 0 0 0 128z" fill-rule="evenodd"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-share" xmlns="http://www.w3.org/2000/svg"><title>share</title><path d="M404.88 416a63.85 63.85 0 0 0-96.8-80.51l-117.63-67.92c.1-.52.08-1.05.16-1.57.27-1.75.44-3.51.57-5.29.12-1.62.22-3.24.21-4.86 0-1.37-.09-2.74-.18-4.11a64.53 64.53 0 0 0-.65-6.06c-.06-.42-.05-.83-.13-1.25l117.64-67.92a64 64 0 1 0-21.33-36.95l-117.5 67.84a63.45 63.45 0 0 0-9.5-6.82 62.56 62.56 0 0 0-5.72-2.58c-.79-.36-1.56-.74-2.36-1.07a63.3 63.3 0 0 0-7.27-2.48c-1.11-.3-2.24-.51-3.37-.76a56.03 56.03 0 0 0-16.97-1.52c-1.23.07-2.42.32-3.64.47-2.61.27-5.2.7-7.76 1.3-1.26.3-2.47.7-3.7 1.08-2.43.74-4.8 1.63-7.13 2.66-1.26.56-2.5 1.13-3.73 1.77-.78.4-1.59.68-2.36 1.12-1.1.64-1.97 1.5-3.02 2.18a53.93 53.93 0 0 0-10.16 8.28 62.43 62.43 0 0 0-4 4.33 63.25 63.25 0 0 0-4.24 5.89c-.63.96-1.4 1.75-1.99 2.75-.34.59-.5 1.22-.81 1.81a63.48 63.48 0 0 0-2.97 6.6c-.7 1.73-1.41 3.44-1.94 5.2-.6 2.1-1.08 4.24-1.45 6.4-.37 1.93-.78 3.83-.97 5.77a63.7 63.7 0 0 0-.17 6.5c0 1.92-.03 3.83.15 5.73.25 2.18.61 4.34 1.09 6.48.38 1.92.73 3.82 1.29 5.7.58 1.96 1.38 3.87 2.16 5.79.8 2.05 1.7 4.06 2.71 6.02.35.65.53 1.35.9 2 .64 1.1 1.5 1.98 2.18 3.03 2.33 3.7 5.1 7.1 8.25 10.12a62.59 62.59 0 0 0 4.4 4.08 62.94 62.94 0 0 0 5.75 4.14c1 .65 1.82 1.46 2.86 2.06.72.42 1.5.67 2.22 1.05a62.95 62.95 0 0 0 10.85 4.46c1.3.4 2.57.82 3.89 1.14 2.5.58 5.04 1 7.6 1.27 1.25.15 2.48.4 3.75.48 3.35.18 6.7.09 10.04-.27 2.28-.28 4.55-.7 6.78-1.22 1.2-.26 2.4-.49 3.59-.81 2.4-.67 4.77-1.48 7.08-2.42.9-.37 1.79-.8 2.68-1.2 1.83-.85 3.72-1.46 5.5-2.49a63.4 63.4 0 0 0 9.51-6.83l117.51 67.85A63.85 63.85 0 0 0 404.88 416z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-sms" xmlns="http://www.w3.org/2000/svg"><title>sms</title><path d="M392.53 128H119.47a33.22 33.22 0 0 0-34.14 32v251.85a14.97 14.97 0 0 0 25.56 10.59L149.33 384h243.2a33.22 33.22 0 0 0 34.14-32V160a33.22 33.22 0 0 0-34.14-32zm-226.2 170.61a51.15 51.15 0 0 1-36.66-13.13l10.57-16.02a37.51 37.51 0 0 0 26.42 10.9c7.33 0 11.77-2.89 11.77-6.81 0-3.92-6.31-5.63-13.81-7.33-13.81-2.73-32.57-6.48-32.57-26.6 0-13.8 11.77-26.25 32.9-26.25a51.14 51.14 0 0 1 34.1 11.42l-11.76 15.17a38.7 38.7 0 0 0-24.04-8.52c-6.3 0-8.86 2.55-8.86 5.96s6.3 5.46 13.8 7.16c13.82 2.9 32.23 7 32.23 26.43 0 17.05-12.28 27.62-34.1 27.62zm136.9-1.53h-21.15v-54.22l-20.97 54.22h-9.37l-20.8-53.54v53.54H209.8v-82.86h29.5l17.04 44.5 17.05-44.5h29.84v82.86zm45 1.02a51.14 51.14 0 0 1-36.14-13.3l11.6-15.34a37.34 37.34 0 0 0 26.25 10.9c7.33 0 11.76-2.9 11.76-6.81 0-3.92-6.13-5.63-13.8-7.33-13.82-2.73-32.57-6.48-32.57-26.6 0-13.81 11.76-26.25 32.9-26.25a51.15 51.15 0 0 1 32.57 11.08l-11.6 15.17a38.87 38.87 0 0 0-24.2-8.52c-6.14 0-8.7 2.38-8.7 5.96s6.3 5.29 13.64 7.16c13.81 2.9 32.4 6.82 32.4 26.26 0 17.05-12.28 27.62-34.1 27.62z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-star" xmlns="http://www.w3.org/2000/svg"><title>star</title><path d="M446.65 188.56L326.01 178.1 278.9 67.17a24.94 24.94 0 0 0-45.87 0l-47.11 111.17-120.4 10.22a24.87 24.87 0 0 0-14.2 43.62l91.48 79.27-27.42 117.66a24.87 24.87 0 0 0 37.14 26.92l103.44-62.32 103.45 62.57a24.87 24.87 0 0 0 37.14-26.93l-27.42-117.9 91.48-79.27a24.82 24.82 0 0 0-13.96-43.62z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-star_half" xmlns="http://www.w3.org/2000/svg"><title>star half</title><path d="M256 52.03a24.48 24.48 0 0 0-22.97 15.14l-47.11 111.17-120.4 10.22a24.87 24.87 0 0 0-14.2 43.62l91.48 79.27-27.42 117.66a24.87 24.87 0 0 0 37.14 26.92l103.44-62.32.04.02V52.03z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-subtitle" xmlns="http://www.w3.org/2000/svg"><title>subtitle</title><path d="M341.33 170.67H170.67a32 32 0 1 0 0 64H224v160a32 32 0 1 0 64 0v-160h53.33a32 32 0 1 0 0-64z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-symbols" xmlns="http://www.w3.org/2000/svg"><title>symbols</title><path d="M384 384h-53.33v-7.93a160 160 0 1 0-149.34 0V384H128a21.33 21.33 0 1 0 0 42.67h85.33a21.4 21.4 0 0 0 21.34-21.34v-66.15a106.67 106.67 0 1 1 42.66 0v66.15a21.4 21.4 0 0 0 21.34 21.34H384a21.33 21.33 0 0 0 0-42.67z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-title" xmlns="http://www.w3.org/2000/svg"><title>title</title><path d="M106.67 138.67a31.96 31.96 0 0 0 32 32H224v224a32 32 0 1 0 64 0v-224h85.33a32 32 0 1 0 0-64H138.67a31.96 31.96 0 0 0-32 32z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-toughest_questions" xmlns="http://www.w3.org/2000/svg"><title>toughest questions</title><path d="M405.33 277.33H448A21.33 21.33 0 0 0 469.33 256V149.33A21.33 21.33 0 0 0 448 128h-85.33v-21.33a64 64 0 0 0-128 0V128h-85.34A21.33 21.33 0 0 0 128 149.33v85.34h-21.33a64 64 0 1 0 0 128H128V448a21.33 21.33 0 0 0 21.33 21.33H448A21.33 21.33 0 0 0 469.33 448V341.33A21.33 21.33 0 0 0 448 320h-42.67a21.33 21.33 0 0 1 0-42.67zm0 85.34h21.34v64h-256v-85.34A21.33 21.33 0 0 0 149.33 320h-42.66a21.33 21.33 0 1 1 0-42.67h42.66A21.33 21.33 0 0 0 170.67 256v-85.33H256a21.33 21.33 0 0 0 21.33-21.34v-42.66a21.33 21.33 0 0 1 42.67 0v42.66a21.33 21.33 0 0 0 21.33 21.34h85.34v64h-21.34a64 64 0 0 0 0 128z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-twitter" xmlns="http://www.w3.org/2000/svg"><title>twitter</title><path d="M408.5 184.3v10.4A223.9 223.9 0 0 1 64 383.9c6.3.4 12.7.4 19 0a158 158 0 0 0 97.8-34.6 79.4 79.4 0 0 1-73.8-54.8c5 .3 10 .3 14.9 0 7 0 14-1 20.8-2.8a78.7 78.7 0 0 1-63.1-77.2c10.6 6 22.5 9.5 34.7 10A78 78 0 0 1 79.6 159c0-14 3.8-27.7 10.7-39.9 40.1 49.3 99.2 79.3 162.6 82.5-1.4-5.9-2.1-12-2.1-18 1-42.9 36.1-77.1 79-77 21.9 0 42.7 9 57.6 25 17.6-3.4 34.4-9.9 49.9-19a78.3 78.3 0 0 1-34.7 43.3c15.6-1.9 31-6 45.4-12.1a162.5 162.5 0 0 1-39.5 40.5z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-underlined" xmlns="http://www.w3.org/2000/svg"><title>underlined</title><path d="M362.67 384H149.33a21.33 21.33 0 0 0 0 42.67h213.34a21.33 21.33 0 0 0 0-42.66zM256 341.35c64.77-.08 117.26-52.56 117.33-117.33V117.34a32 32 0 1 0-64 0v106.67a53.33 53.33 0 1 1-106.66 0V117.34a32 32 0 1 0-64 0v106.67c.07 64.77 52.56 117.25 117.33 117.33z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-verified" xmlns="http://www.w3.org/2000/svg"><title>verified</title><path d="M458.68 177.07l-51.58-25.6-8.93-53.33a24.5 24.5 0 0 0-26.66-19.2l-55.99 8.53L275 49.07a22.52 22.52 0 0 0-31.45 0l-44.66 38.4-55.98-8.53a23.1 23.1 0 0 0-26.93 19.2l-8.93 53.33-51.45 25.6a23.92 23.92 0 0 0-11.2 29.86L71.08 256 46.8 305.07a25.59 25.59 0 0 0 8.94 29.86l51.45 25.6 8.93 53.34a24.6 24.6 0 0 0 26.92 19.2l55.99-8.54 40.25 38.4a22.37 22.37 0 0 0 31.32 0l40-38.4 55.98 8.54a23.1 23.1 0 0 0 27.05-19.2l8.93-53.34 51.46-25.6a21 21 0 0 0 8.93-29.86L443.08 256h-.13l24.66-49.07a25.77 25.77 0 0 0-8.93-29.86zm-112.17 48.76L256 316.34a21.4 21.4 0 0 1-30.17 0L165.5 256a21.33 21.33 0 1 1 30.17-30.17l45.26 45.25 75.42-75.42a21.33 21.33 0 0 1 30.17 30.17z"/></symbol><symbol viewBox="0 0 512 512" style="overflow: visible" id="icon-std-youtube" xmlns="http://www.w3.org/2000/svg"><title>youtube</title><path d="M440 356.4a48.2 48.2 0 0 1-34 34.1c-49.8 6-99.9 8.7-150 8.1-50.1.6-100.2-2-150-8a48.2 48.2 0 0 1-34-34.2 506 506 0 0 1-8-93 506 506 0 0 1 8-93 48.2 48.2 0 0 1 34-34.2c49.8-6 99.9-8.7 150-8.1 50.1-.6 100.2 2 150 8a48.2 48.2 0 0 1 34 34.2 506 506 0 0 1 8 93 506 506 0 0 1-8 93zm-223.3-36l100.4-57-100.4-57.1v114.1z"/></symbol></svg>';
  document.body.insertBefore(svgWrapper, document.body.firstChild);
})();
