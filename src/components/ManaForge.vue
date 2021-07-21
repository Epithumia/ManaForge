<template>
  <div class="manaforge flex flex-col flex-1">
    <flash-message class="popup"></flash-message>
    <import-modal v-on:submit-recipe="import_recipe($event)" v-bind:recipe="recipe"/>
    <div class="grid grid-cols-8 flex-1 space-x-1 h-full">
      <div
          class="flex flex-col bg-white dark:bg-night-900 dark:text-night-100 shadow overflow-hidden sm:rounded-lg"
          v-bind:class="{'col-span-5': showRecipe, 'col-span-6': !showRecipe}">
        <div class="px-4 py-2 dark:bg-night-700">
          <h3 class="text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
            Ingredients
          </h3>
        </div>
        <div class="flex dark:bg-night-700 px-4 py-2">
          <div class="flex-auto">
            <label for="material" class="block text-sm font-medium text-gray-700 dark:text-night-100">Material</label>
            <select v-model="selected_material" id="material" name="material" autocomplete="material"
                    class="mt-1 block w-full py-1 px-2 border border-gray-300 dark:border-night-100 bg-white dark:bg-night-900 dark:text-night-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option v-for="option in MATERIAL" v-bind:value="option" v-bind:key="option.value">{{ get_text(option) }}
              </option>
            </select>
          </div>
          <div class="flex-auto">
            <label for="equip" class="block text-sm font-medium text-gray-700 dark:text-night-100">Equipment</label>
            <select v-model="selected_object" id="equip" name="equip" autocomplete="equip"
                    class="mt-1 block w-full py-1 px-2 border border-gray-300 dark:border-night-100 bg-white dark:bg-night-900 dark:text-night-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option v-for="option in EQUIP" v-bind:value="option" v-bind:key="option.value">{{ get_text(option) }}</option>
            </select>
          </div>
        </div>
        <div class="flex-1 px-4 py-2">
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Coins</legend>
            <div class="grid grid-rows-2 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.WispGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WispSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ShadeGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ShadeSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DryadGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DryadSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AuraGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AuraSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SalaGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SalaSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GnomeGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GnomeSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.JinnGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.JinnSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.UndineGold" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.UndineSilver" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Stones and Crystals</legend>
            <div class="grid grid-rows-1 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.FireStone" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.EarthStone" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WindStone" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WaterStone" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SunCrystal" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MoonCrystal" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GlowCrystal" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ChaosCrystal" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Seeds</legend>
            <div class="grid grid-rows-1 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.RoundSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.OblongSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CrookedSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BigSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SmallSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.LongSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FlatSeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpinySeed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Produce & Meat</legend>
            <div class="grid grid-rows-5 grid-cols-8 grid-flow-col-dense">
              <ItemButton v-bind:item="ITEM.Bellgrapes" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Diceberry" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Mangoelephant" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.LoquatShoes" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PearOheels" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Squalphin" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Citrisquid" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Springanana" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PeachPuppy" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Apricat" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Applesocks" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Whalamato" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PineOclock" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FishyFruit" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Boarmelon" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Rhinoloupe" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Orcaplant" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Garlicrown" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HoneyOnion" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SweetMoai" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpinyCarrot" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Conchurnip" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Cornflower" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Cabadillo" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Needlettuce" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CherryBombs" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MaskedPotato" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Lilipods" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.RocketPapaya" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Orangeopus" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Bumpkin" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HeartMint" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpadeBasil" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Dialaurel" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GoldClover" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MushInABox" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Toadstoolshed" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AllMeat" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Fangs & Claws</legend>
            <div class="grid grid-rows-1 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.SharpClaw" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PoisonFang" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GiantsHorn" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Scissors" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HealingClaw" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ZombieClaw" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.VampireFang" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Eyes</legend>
            <div class="grid grid-rows-1 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.LittleEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SleepyEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SillyEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DangerousEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AngryEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BlankEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WickedEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CreepyEye" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Wings & Feathers</legend>
            <div class="grid grid-rows-1 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.AngelFeather" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.RavenFeather" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ClearFeather" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MothWing" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FlamingQuill" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WhiteFeather" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend>Misc.</legend>
            <div class="grid grid-rows-4 grid-cols-8 grid-flow-col">
              <ItemButton v-bind:item="ITEM.AromaOil" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DragonBlood" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Acid" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HolyWater" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Ether" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Mercury" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.StinkyBreath" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GhostsHowl" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DragonsBreath" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.VirginsSigh" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Electricity" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Moss" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.EarOfWheat" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BakedRoach" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BlackenedBat" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Sulpher" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PoisonPowder" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SleepyPowder" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.KnockoutDust" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Rust" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GraveDirt" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Ash" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Hairball" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Needle" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MirrorPiece" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WadOfWool" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MessyScroll" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GreenballBun" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.TakoBug" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
        </div>
        <div class="flex-0 flex justify-center">
          <div class="self-center" @click="step=0">
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
            </svg>
          </div>
          <div class="self-center" @click="step--">
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </div>
          <div class="self-center">
            <label for="step" class="text-xs dark:bg-night-900 dark:text-night-100">Step:</label>
            <input id="step"
                   class="dark:bg-night-900 dark:text-night-100 text-xs mt-1 py-1 w-8 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   type="text" v-model="step">
          </div>
          <div class="self-center" @click="step++">
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
          <div class="self-center" @click="step=history.length">
            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div
      >
      <div class="flex flex-col h-auto overflow-hidden shadow sm:rounded-lg" v-if="showRecipe">
        <div
            class="flex flex-col bg-white h-auto overflow-hidden dark:bg-night-700 dark:text-night-100">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
              Recipe
            </h3>
          </div>
          <div class="text-sm border-t border-gray-200 overflow-scroll dark:border-night-700 dark:bg-night-500">
            <draggable tag="ul" v-model="history" class="list-group">
              <li
                  class="list-group-item border rounded-full border-solid"
                  v-for="(element, idx) in history"
                  v-bind:class="{'border-night-100': idx+1===step, 'dark:border-night-300': idx+1!==step}"
                  :key="element.name"
              >
                <i class="handle">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-night-300"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </i>

                <span class="text">{{ get_text(element) }}</span>

                <i class="close" @click="removeAt(idx)">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-night-300"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </i>
              </li>
            </draggable>
          </div>
        </div>
      </div>
      <div class="flex col-span-2 flex-col">
        <div class="bg-white dark:bg-night-700 dark:text-night-100 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
              Statistics
            </h3>
            <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500 dark:text-night-300">
                <!-- Heroicon name: cog -->
                <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-night-300"
                     xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
                {{ get_text(selected_material) }} {{ get_text(selected_object) }}
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 dark:border-night-700 dark:bg-night-900">
            <dl>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100">
                  Price
                </dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2">
                  {{ itemForged.getPrice() }}
                </dd>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100" v-if="selected_object.value<=11">
                  <span>Attack</span>
                </dt>
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100" v-else>
                  <span>Defenses</span>
                </dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2"
                    v-if="selected_object.value<=11">
                  {{ itemForged.getAttack() }}
                </dd>
                <dd class="mt-1 text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2" v-else>
                  {{ itemForged.getDefenses() }}
                </dd>
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100" v-if="selected_object.value<=11">
                  <span>Sh/He/Fo/Te</span>
                </dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2"
                    v-if="selected_object.value<=11">
                  {{ itemForged.getSharp() }} / {{ itemForged.getHeavy() }} / {{ itemForged.getForce() }} / {{ itemForged.getTech() }}
                </dd>
              </div>
              <div class="text-sm bg-gray-50 dark:bg-night-500 px-4 py-2 flex flex-col">
                <div class="grid grid-cols-10 grid-rows-2 flex-1">
                  <!-- headers -->
                  <div class="col-span-2"></div>
                  <div>Pwr</div>
                  <div>Dex</div>
                  <div>Def</div>
                  <div>Mag</div>
                  <div>{{classic ? 'HP': 'Con'}}</div>
                  <div>Mnd</div>
                  <div>Chm</div>
                  <div>Lck</div>

                  <!-- Stats -->
                  <div class="col-span-2">Stats</div>
                  <div>{{ itemForged.getPwr() }}</div>
                  <div>{{ itemForged.getSkl() }}</div>
                  <div>{{ itemForged.getDef() }}</div>
                  <div>{{ itemForged.getMag() }}</div>
                  <div>{{ itemForged.getHp() }}</div>
                  <div>{{ itemForged.getSpr() }}</div>
                  <div>{{ itemForged.getChm() }}</div>
                  <div>{{ itemForged.getLck() }}</div>

                </div>

                <div class="bg-white dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                </div>
                <div class="grid grid-cols-10 grid-rows-5 flex-1">
                  <!-- headers -->
                  <div class="col-span-2"></div>
                  <div>WI</div>
                  <div>SH</div>
                  <div>DR</div>
                  <div>AU</div>
                  <div>SA</div>
                  <div>GN</div>
                  <div>JI</div>
                  <div>UN</div>

                  <!-- Resists -->
                  <div class="col-span-2">Resists</div>
                  <div>{{ itemForged.getWiR() }}</div>
                  <div>{{ itemForged.getShR() }}</div>
                  <div>{{ itemForged.getDrR() }}</div>
                  <div>{{ itemForged.getAuR() }}</div>
                  <div>{{ itemForged.getSaR() }}</div>
                  <div>{{ itemForged.getGnR() }}</div>
                  <div>{{ itemForged.getJiR() }}</div>
                  <div>{{ itemForged.getUnR() }}</div>

                  <!-- Essences -->
                  <div class="col-span-2">Essence</div>
                  <div>{{ itemForged.getWi() }}</div>
                  <div>{{ itemForged.getSh() }}</div>
                  <div>{{ itemForged.getDr() }}</div>
                  <div>{{ itemForged.getAu() }}</div>
                  <div>{{ itemForged.getSa() }}</div>
                  <div>{{ itemForged.getGn() }}</div>
                  <div>{{ itemForged.getJi() }}</div>
                  <div>{{ itemForged.getUn() }}</div>

                  <!-- Markers -->
                  <div class="col-span-2">Markers</div>
                  <div>{{ itemForged.getMarker(ESSENCE.WISP) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.SHADE) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.DRYAD) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.AURA) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.SALA) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.GNOME) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.JINN) }}</div>
                  <div>{{ itemForged.getMarker(ESSENCE.UNDINE) }}</div>

                  <!-- Immunities -->
                  <div class="col-span-2">Immunity</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Sleep) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Poison) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Paralysis) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Confusion) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Darkness) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Petrify) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Flameburst) }}</div>
                  <div>{{ itemForged.getShortImmunity(IMMUNITY.Freeze) }}</div>
                </div>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100">
                  Cards
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100">
                  ({{ itemForged.hidden.CPRINT() }})<br>
                  {{ itemForged.first.CPRINT() }}<br>
                  {{ itemForged.second.CPRINT() }}<br>
                  {{ itemForged.third.CPRINT() }}<br>
                  {{ itemForged.leaving.CPRINT() }}-->
                </dd>
              </div>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-night-100">
                  Effects
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100" style="text-align: left"
                    v-if="selected_object.value<=11">
                  Master Move 1 : {{ get_text(itemForged.getPlunge1()) }}<br>
                  Master Move 2 : {{ get_text(itemForged.getPlunge2()) }}<br>
                  Master Move 3 : {{ get_text(itemForged.getPlunge3()) }}<br>
                </dd>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100" v-else>
                  Special : {{ get_text(itemForged.getSpecial()) }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex-grow">

        </div>
        <div class="bg-white dark:bg-night-700 dark:text-night-100 shadow overflow-hidden sm:rounded-lg align-bottom">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
              Menu
            </h3>
          </div>
          <div class="border-t border-gray-200 dark:border-night-700 dark:bg-night-700">
            <dl>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100"
                        @click="$modal.show('recipe-input')">Import
                </button>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" @click="copy_source">Copy to
                  clipboard (source)
                </button>
              </div>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" @click="copy_text">Copy to
                  clipboard (text)
                </button>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" v-if="!showRecipe"
                        @click="toggle_recipe">
                  Show Recipe
                </button>
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" v-else @click="toggle_recipe">
                  Hide Recipe
                </button>
              </div>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-12 items-center sm:gap-4 sm:px-6">
                <div class="flex w-10 z-0 self-center items-center" @click="classic = !classic">
                  <div class="w-16 h-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out" :class="{ 'bg-green-400': classic}">
                    <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out" :class="{ 'translate-x-4': classic,}"></div>
                  </div>
                </div>
                <div class="z-10 col-span-11 text-sm text-gray-900 dark:text-night-100">Switch back to classic names</div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {EQUIP, MATERIAL, STAT, ESSENCE, ITEM, IMMUNITY} from '@/forge/enums'
import {mat_word} from '@/forge/lists'
import {Ancient_Moon, Sacrificed_Nymph} from "@/forge/cards";
import {No_Item} from "@/forge/items";
import {ForgedItem} from "@/forge/ForgedItem";
import ItemButton from "@/components/ItemButton";
import copy from 'copy-text-to-clipboard';
import draggable from "vuedraggable";
import importModal from '@/components/importModal'

export default {
  name: 'ManaForge',
  components: {ItemButton, draggable, importModal},
  props: {},
  data() {
    return {
      mat_word: mat_word,
      stat: STAT.ALL,
      card: new Ancient_Moon(),
      /**
       * @type Card
       */
      card2: new Sacrificed_Nymph(),

      /**
       * @type Item | No_Item
       */
      item: new No_Item(),
      showRecipe: true,
      count: 0,
      step: 0,
      ITEM: ITEM,
      EQUIP: EQUIP,
      MATERIAL: MATERIAL,
      ESSENCE: ESSENCE,
      IMMUNITY:IMMUNITY,
      selected_material: MATERIAL.MenosBronze,
      selected_object: EQUIP.Knife,
      itemForged: new ForgedItem([EQUIP.Pendant.value, MATERIAL.MenosBronze.value]),
      /**
       * @type [ITEM]
       */
      history: [],
      recipe: '',
      classic: false
    }
  },
  methods: {
    removeAt(idx) {
      this.history.splice(idx, 1);
      if (this.step > this.history.length) this.step = this.history.length
    },
    toggle_recipe() {
      this.showRecipe = !this.showRecipe
    },

    /**
     * @param i : int
     */
    forge(i) {
      let item = this.itemForged
      item.set_item(i)
      item.init_stat_limits()
      item.sub_init_cards()
      item.material_init()
      item.set_active_world_card()
      item.item_energy()
      item.material_code()
      item.item_code()
      item.push_cards()
      item.activate_cards()
      item.check_type_effects()
      item.increase_essences()
      item.calculate_stats()
    },
    add_item(i) {
      if (i > 0) {
        this.history.splice(this.step, 0, this.find_item_by_val(i))
        this.step++
      }
    },
    rebuild() {
      this.itemForged = new ForgedItem([this.selected_object.value, this.selected_material.value])
      for (let i = 0; i < Math.min(this.history.length, this.step); i++) {
        this.forge(this.history[i].value)
      }
    },
    copy_source() {
      let src = ''
      src += this.selected_object.value
      src += '\n' + this.selected_material.value + '\n'
      for (let i = 0; i < this.history.length; i++) {
        src += this.history[i].value + ' '
      }
      if (copy(src.trim())) {
        this.flashSuccess('Copied to clipboard!')
      } else {
        this.flashError('Could not copy to clipboard')
      }
    },
    /**
     * @param i
     * @return ITEM | NoItem
     */
    find_item_by_val(i) {
      for (const [, item] of Object.entries(ITEM)) {
        if (item.value === i) return item
      }
      return ITEM.NoItem
    },
    find_object_by_val(i) {
      for (const [, item] of Object.entries(EQUIP)) {
        if (item.value === i) return item
      }
      return EQUIP.Knife
    },
    find_mat_by_val(i) {
      for (const [, item] of Object.entries(MATERIAL)) {
        if (item.value === i) return item
      }
      return MATERIAL.MenosBronze
    },
    copy_text() {
      let src = ''
      src += this.get_text(this.selected_object)
      src += '\n' + this.get_text(this.selected_material)
      let buffer = ''
      let count = 0
      for (let i = 0; i < this.history.length; i++) {
        if (buffer === '') {
          buffer = this.get_text(this.history[i])
          count++
        }
        else if (buffer === this.get_text(this.history[i])) {
          count++
        } else {
          src += '\n' + buffer
          if (count > 1) src += ' x' + count
          count = 1
          buffer = this.get_text(this.history[i])
        }
      }
      if (buffer) {
        src += '\n' + buffer
        if (count > 1) src += ' x' + count
        count = 0
      }
      if (copy(src)) {
        this.flashSuccess('Copied to clipboard!')
      } else {
        this.flashError('Could not copy to clipboard')
      }
    },
    import_recipe(recipe) {
      this.recipe = recipe
      let pre_recipe = recipe.split(/[\s,]+/).map(Number)
      pre_recipe = this.filter_array(pre_recipe)
      if (pre_recipe.length > 1) {
        if (pre_recipe[0] > 0 && pre_recipe[0] < 24 && pre_recipe[1] > 0 && pre_recipe[1] < 56) {
          for (let i = 2; i < pre_recipe.length; i++) {
            if (pre_recipe[i] < 0 || pre_recipe[i] > 120) {
              this.flashError('Error in recipe on step ' + (i + 1))
              return false
            }
          }
        } else {
          this.flashError('Error: invalid Object or Material.')
          return false
        }
      } else {
        this.flashError('Error: recipe too short.')
        return false
      }
      this.selected_object = this.find_object_by_val(pre_recipe[0])
      this.selected_material = this.find_mat_by_val(pre_recipe[1])
      this.history = []
      for (let i = 2; i < pre_recipe.length; i++) {
        this.history.push(this.find_item_by_val(pre_recipe[i]))
      }
      this.step = this.history.length
      this.flashSuccess('Recipe successfully imported!')
      this.$modal.hide('recipe-input')
      return true
    },
    filter_array(test_array) {
      let index = -1,
          arr_length = test_array ? test_array.length : 0,
          resIndex = -1,
          result = [];

      while (++index < arr_length) {
        const value = test_array[index];

        if (value) {
          result[++resIndex] = Math.trunc(value);
        }
      }

      return result;
    },
    get_text(o) {
      if (this.classic && 'psxtext' in o) {
        return o.psxtext
      }
      return o.text
    }
  },
  watch: {
    history: function () {
      this.rebuild()
    },
    step: function (newV) {
      if (newV > this.history.length) {
        this.step = this.history.length
      } else if (newV < 0) {
        this.step = 0
      } else {
        this.step = newV
      }
      this.rebuild()
    },
    selected_material: function () {
      this.rebuild()
    },
    selected_object: function () {
      this.rebuild()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.popup {
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: absolute;
  top: 40px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.list-group-item {
  cursor: move;
}

.handle {
  float: left;
}

.close {
  float: right;
  cursor: pointer;
}

</style>
