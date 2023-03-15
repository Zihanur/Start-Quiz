<div class="m-3 py-3 px-4 shadow-sm rounded">
  <div class="flex items-center">
    <div class="h-8 w-8 bg-green-300 rounded-full flex justify-center items-center text-green-800 mr-3">
      ${i + 1}
    </div>
    <p class="text-gray-800 text-sm">${quiz.question}</p>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-5">
    ${displayQuizOptions(quiz.options, i)}
  </div>
</div>