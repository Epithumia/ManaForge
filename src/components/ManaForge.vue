<template>
  <div class="manaforge flex flex-col flex-1">
    <flash-message class="popup"></flash-message>
    <import-modal v-on:submit-recipe="import_recipe($event)" v-bind:recipe="recipe"/>
    <div class="grid sm:grid-cols-8 flex-1 space-x-1 h-full">
      <div
          class="flex flex-col bg-white dark:bg-night-900 dark:text-night-100 shadow overflow-hidden sm:rounded-lg"
          v-bind:class="{'xl:col-span-5 col-span-3': showRecipe, 'xl:col-span-6 col-span-4': !showRecipe}"
          v-if='!show_materials'>
        <div class="px-4 py-2 dark:bg-night-700">
          <h3 class="xl:text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
            Explanations
          </h3>
        </div>
        <div class="flex flex-col xl:flex-row dark:bg-night-700 px-4 py-2">
          <div class="flex-auto">

          </div>
          <div class="flex-auto">

          </div>
        </div>
        <div class="px-4 py-2">
          {{explanation}}
        </div>
        <div class="flex-0 flex flex-col justify-center">
          <div class="self-center flex flex-0">
            <div class="self-center" @click="step=0">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
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
                     class="dark:bg-night-900 dark:text-night-100 text-xxs mt-1 py-1 w-12 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
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
          <div class="self-center flex flex-0">
            <div class="self-center" @click="debug_step--">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div class="self-center">
              <label for="debug_step" class="text-xs dark:bg-night-900 dark:text-night-100">Sub-step:</label>
              <select id="debug_step"
                      class="dark:bg-night-900 dark:text-night-100 text-xs mt-1 py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      v-model="debug_step">
                <option v-for="option in DEBUG_STEPS" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="self-center" @click="debug_step++">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex flex-col bg-white dark:bg-night-900 dark:text-night-100 shadow overflow-hidden sm:rounded-lg"
          v-bind:class="{'xl:col-span-5 sm:col-span-3 col-span-4': showRecipe, 'xl:col-span-6 col-span-4': !showRecipe}"
          v-if='show_materials'>
        <div class="px-4 py-2 dark:bg-night-700">
          <h3 class="xl:text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
            Ingredients
          </h3>
        </div>
        <div class="flex flex-col xl:flex-row dark:bg-night-700 px-4 py-2">
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
              <option v-for="option in EQUIP" v-bind:value="option" v-bind:key="option.value">{{
                  get_text(option)
                }}
              </option>
            </select>
          </div>
        </div>
        <div class="px-4 py-2">
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="coins_visible=!coins_visible">Coins</legend>
            <div v-if="!(coins_visible||window_width>=1333)" @click="coins_visible=!coins_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield16" v-else>
              <ItemButton v-bind:item="ITEM.WispGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WispSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ShadeGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ShadeSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DryadGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DryadSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AuraGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AuraSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SalaGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SalaSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GnomeGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GnomeSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.JinnGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.JinnSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.UndineGold" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.UndineSilver" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="stones_visible=!stones_visible">Stones and Crystals</legend>
            <div v-if="!(stones_visible||window_width>=1333)" @click="stones_visible=!stones_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield8" v-else>
              <ItemButton v-bind:item="ITEM.FireStone" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.EarthStone" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WindStone" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WaterStone" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SunCrystal" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MoonCrystal" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GlowCrystal" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ChaosCrystal" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="seeds_visible=!seeds_visible">Seeds</legend>
            <div v-if="!(seeds_visible||window_width>=1333)" @click="seeds_visible=!seeds_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield8" v-else>
              <ItemButton v-bind:item="ITEM.RoundSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.OblongSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CrookedSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BigSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SmallSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.LongSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FlatSeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpinySeed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="produce_visible=!produce_visible">Produce & Meat</legend>
            <div v-if="!(produce_visible||window_width>=1333)" @click="produce_visible=!produce_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield40" v-else>
              <ItemButton v-bind:item="ITEM.Bellgrapes" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Diceberry" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Mangoelephant" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.LoquatShoes" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PearOheels" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Squalphin" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Citrisquid" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Springanana" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PeachPuppy" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Apricat" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Applesocks" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Whalamato" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PineOclock" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FishyFruit" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Boarmelon" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Rhinoloupe" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Orcaplant" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Garlicrown" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HoneyOnion" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SweetMoai" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpinyCarrot" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Conchurnip" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Cornflower" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Cabadillo" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Needlettuce" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CherryBombs" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MaskedPotato" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Lilipods" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.RocketPapaya" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Orangeopus" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Bumpkin" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HeartMint" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SpadeBasil" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Dialaurel" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GoldClover" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MushInABox" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Toadstoolshed" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AllMeat" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="fangs_visible=!fangs_visible">Fangs & Claws</legend>
            <div v-if="!(fangs_visible||window_width>=1333)" @click="fangs_visible=!fangs_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield8" v-else>
              <ItemButton v-bind:item="ITEM.SharpClaw" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PoisonFang" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GiantsHorn" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Scissors" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HealingClaw" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ZombieClaw" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.VampireFang" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="eyes_visible=!eyes_visible">Eyes</legend>
            <div v-if="!(eyes_visible||window_width>=1333)" @click="eyes_visible=!eyes_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield8" v-else>
              <ItemButton v-bind:item="ITEM.LittleEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SleepyEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SillyEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DangerousEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.AngryEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BlankEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WickedEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.CreepyEye" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="wings_visible=!wings_visible">Wings & Feathers</legend>
            <div v-if="!(wings_visible||window_width>=1333)" @click="wings_visible=!wings_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield8" v-else>
              <ItemButton v-bind:item="ITEM.AngelFeather" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.RavenFeather" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.ClearFeather" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MothWing" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.FlamingQuill" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WhiteFeather" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
          <fieldset class="border border-solid dark:border-night-100 text-sm rounded-md">
            <legend @click="misc_visible=!misc_visible">Misc.</legend>
            <div v-if="!(misc_visible||window_width>=1333)" @click="misc_visible=!misc_visible">
              <span>Click/tap to open</span>
            </div>
            <div class="btnfield32" v-else>
              <ItemButton v-bind:item="ITEM.AromaOil" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DragonBlood" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Acid" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.HolyWater" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Ether" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Mercury" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.StinkyBreath" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GhostsHowl" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.DragonsBreath" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.VirginsSigh" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Electricity" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Moss" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.EarOfWheat" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BakedRoach" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.BlackenedBat" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Sulpher" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.PoisonPowder" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.SleepyPowder" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.KnockoutDust" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Rust" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GraveDirt" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Ash" v-bind:classic="classic" v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Hairball" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.Needle" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MirrorPiece" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.WadOfWool" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.MessyScroll" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.GreenballBun" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
              <ItemButton v-bind:item="ITEM.TakoBug" v-bind:classic="classic"
                          v-on:add-item="add_item($event)"></ItemButton>
            </div>
          </fieldset>
        </div>
        <div class="flex-0 flex flex-col justify-center">
          <div class="self-center flex flex-0">
            <div class="self-center" @click="step=0">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
              </svg>
            </div>
            <div class="self-center" @click="step--">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div class="self-center">
              <label for="step_ex" class="text-xs dark:bg-night-900 dark:text-night-100">Step:</label>
              <input id="step_ex"
                     class="dark:bg-night-900 dark:text-night-100 text-xxs mt-1 py-1 w-12 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
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
          <div class="self-center flex flex-0">
            <div class="self-center" @click="debug_step--">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </div>
            <div class="self-center">
              <label for="debug_step_ex" class="text-xs dark:bg-night-900 dark:text-night-100">Sub-step:</label>
              <select id="debug_step_ex"
                      class="dark:bg-night-900 dark:text-night-100 text-xs mt-1 py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      v-model="debug_step">
                <option v-for="option in DEBUG_STEPS" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="self-center" @click="debug_step++">
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col h-auto overflow-hidden shadow sm:rounded-lg col-span-4 sm:col-span-2 xl:col-span-1" v-if="showRecipe">
        <div
            class="flex flex-col bg-white h-auto overflow-hidden dark:bg-night-700 dark:text-night-100">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="xl:text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
              Recipe
            </h3>
          </div>
          <div class="text-sm border-t border-gray-200 overflow-auto overflow-x-hidden dark:border-night-700 dark:bg-night-500">
            <draggable tag="ul" v-model="history" class="list-group" id="drag_list" ref="drag_list"
            :delay="250" :delay-on-touch-only="true">
              <li
                  class="list-group-item border-2 rounded-full border-solid"
                  v-for="(element, idx) in history"
                  v-bind:class="{'border-night-100': idx+1===step, 'dark:border-night-300 text-night-300': idx+1!==step}"
                  :key="element.name"
                  @dblclick="removeAt(idx)"
              >
                <i class="handle">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-night-300"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </i>

                <span class="text text-xxs md:text-sm xl:text-xxs 2xl:text-xs">{{ get_text(element) }}</span>

                <i class="close z-50" @click="removeAt(idx)">
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
      <div class="flex xl:col-span-2 sm:col-span-3 col-span-4 flex-col">
        <div class="bg-white dark:bg-night-700 dark:text-night-100 shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="xl:text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
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
                <span class="text text-xxs sm:text-sm">
                  {{ get_text(selected_material) }} {{ get_text(selected_object) }}
                </span>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 dark:border-night-700 dark:bg-night-900">
            <dl>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100">
                  Price
                </dt>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2">
                  {{ itemForged.getPrice() }}
                </dd>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100"
                    v-if="selected_object.value<=11">
                  <span>Attack</span>
                </dt>
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100" v-else>
                  <span>Defenses</span>
                </dt>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2"
                    v-if="selected_object.value<=11">
                  {{ itemForged.getAttack() }}
                </dd>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2" v-else>
                  {{ itemForged.getDefenses() }}
                </dd>
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100"
                    v-if="selected_object.value<=11">
                  <span>Sh/He/Fo/Te</span>
                </dt>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 dark:text-night-100 sm:mt-0 sm:col-span-2"
                    v-if="selected_object.value<=11">
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_sharp:null">{{ itemForged.getSharp() }}</span> /
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_heavy:null">{{ itemForged.getHeavy() }}</span> /
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_force:null">{{ itemForged.getForce() }}</span> /
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_tech:null">{{ itemForged.getTech() }}</span>
                </dd>
              </div>
              <div class="text-xs md:text-sm bg-gray-50 dark:bg-night-500 px-4 py-2 flex flex-col">
                <div class="grid grid-cols-10 grid-rows-2 flex-1">
                  <!-- headers -->
                  <div class="col-span-2"></div>
                  <div>Pwr</div>
                  <div>Dex</div>
                  <div>Def</div>
                  <div>Mag</div>
                  <div>{{ classic ? 'HP' : 'Con' }}</div>
                  <div>Mnd</div>
                  <div>Chm</div>
                  <div>Lck</div>

                  <!-- Stats -->
                  <div class="col-span-2">Stats</div>
                  <div :class="debug_step ? itemForged.highlight_pwr:null">{{ itemForged.getPwr() }}</div>
                  <div :class="debug_step ? itemForged.highlight_skl:null">{{ itemForged.getSkl() }}</div>
                  <div :class="debug_step ? itemForged.highlight_def:null">{{ itemForged.getDef() }}</div>
                  <div :class="debug_step ? itemForged.highlight_mag:null">{{ itemForged.getMag() }}</div>
                  <div :class="debug_step ? itemForged.highlight_hp:null">{{ itemForged.getHp() }}</div>
                  <div :class="debug_step ? itemForged.highlight_spr:null">{{ itemForged.getSpr() }}</div>
                  <div :class="debug_step ? itemForged.highlight_chm:null">{{ itemForged.getChm() }}</div>
                  <div :class="debug_step ? itemForged.highlight_lck:null">{{ itemForged.getLck() }}</div>

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
                  <div :class="debug_step ? itemForged.highlight_wiR:null">{{ itemForged.getWiR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_shR:null">{{ itemForged.getShR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_drR:null">{{ itemForged.getDrR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_auR:null">{{ itemForged.getAuR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_saR:null">{{ itemForged.getSaR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_gnR:null">{{ itemForged.getGnR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_jiR:null">{{ itemForged.getJiR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_unR:null">{{ itemForged.getUnR() }}</div>

                  <!-- Essences -->
                  <div class="col-span-2">Essence</div>
                  <div :class="debug_step ? itemForged.highlight_wi:null">{{ itemForged.getWi() }}</div>
                  <div :class="debug_step ? itemForged.highlight_sh:null">{{ itemForged.getSh() }}</div>
                  <div :class="debug_step ? itemForged.highlight_dr:null">{{ itemForged.getDr() }}</div>
                  <div :class="debug_step ? itemForged.highlight_au:null">{{ itemForged.getAu() }}</div>
                  <div :class="debug_step ? itemForged.highlight_sa:null">{{ itemForged.getSa() }}</div>
                  <div :class="debug_step ? itemForged.highlight_gn:null">{{ itemForged.getGn() }}</div>
                  <div :class="debug_step ? itemForged.highlight_ji:null">{{ itemForged.getJi() }}</div>
                  <div :class="debug_step ? itemForged.highlight_un:null">{{ itemForged.getUn() }}</div>

                  <!-- Taint points -->
                  <div class="col-span-2">T. Points</div>
                  <div></div>
                  <div></div>
                  <div :class="debug_step ? itemForged.highlight_drLR:null">{{ itemForged.getDrLR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_auLR:null">{{ itemForged.getAuLR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_saLR:null">{{ itemForged.getSaLR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_gnLR:null">{{ itemForged.getGnLR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_jiLR:null">{{ itemForged.getJiLR() }}</div>
                  <div :class="debug_step ? itemForged.highlight_unLR:null">{{ itemForged.getUnLR() }}</div>

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
                  <div :class="debug_step ? itemForged.highlight_immunity_sleep:null">{{ itemForged.getShortImmunity(IMMUNITY.Sleep) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_poison:null">{{ itemForged.getShortImmunity(IMMUNITY.Poison) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_paralysis:null">{{ itemForged.getShortImmunity(IMMUNITY.Paralysis) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_confusion:null">{{ itemForged.getShortImmunity(IMMUNITY.Confusion) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_darkness:null">{{ itemForged.getShortImmunity(IMMUNITY.Darkness) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_petrify:null">{{ itemForged.getShortImmunity(IMMUNITY.Petrify) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_flameburst:null">{{ itemForged.getShortImmunity(IMMUNITY.Flameburst) }}</div>
                  <div :class="debug_step ? itemForged.highlight_immunity_freeze:null">{{ itemForged.getShortImmunity(IMMUNITY.Freeze) }}</div>
                </div>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100">
                  Energy
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100">
                  <div ><span class="inline-block" :class="debug_step ? itemForged.highlight_energy:null">{{ itemForged.energy }}</span></div>
                </dd>
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100">
                  Cards
                </dt>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100">
                  (<span class="inline-block" :class="debug_step ? itemForged.highlight_hidden:null">{{ itemForged.hidden.CPRINT() }}</span>)<br>
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_first:null">{{ itemForged.first.CPRINT() }}</span><br>
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_second:null">{{ itemForged.second.CPRINT() }}</span><br>
                  <span class="inline-block" :class="debug_step ? itemForged.highlight_third:null">{{ itemForged.third.CPRINT() }}</span><br>
                  &nbsp;&nbsp;&nbsp;<span class="inline-block" :class="debug_step ? itemForged.highlight_leaving:null">{{ itemForged.leaving.CPRINT() }}</span>-->
                </dd>
              </div>
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-xs md:text-sm font-medium text-gray-500 dark:text-night-100">
                  Effects
                </dt>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100"
                    style="text-align: left"
                    v-if="selected_object.value<=11">
                  {{ classic ? 'Plunge Attack' : 'Master Move' }} 1 : <span class="inline-block" :class="debug_step ? itemForged.highlight_plunge1:null">{{ get_text(itemForged.getPlunge1()) }}</span><br>
                  {{ classic ? 'Plunge Attack' : 'Master Move' }} 2 : <span class="inline-block" :class="debug_step ? itemForged.highlight_plunge2:null">{{ get_text(itemForged.getPlunge2()) }}</span><br>
                  {{ classic ? 'Plunge Attack' : 'Master Move' }} 3 : <span class="inline-block" :class="debug_step ? itemForged.highlight_plunge3:null">{{ get_text(itemForged.getPlunge3()) }}</span><br>
                </dd>
                <dd class="mt-1 text-xs md:text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-night-100" v-else>
                  Special : <span class="inline-block" :class="debug_step ? itemForged.highlight_special:null">{{ get_text(itemForged.getSpecial()) }}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-white dark:bg-night-700 dark:text-night-100 shadow overflow-hidden sm:rounded-lg align-bottom">
          <div class="px-4 py-5 sm:px-6 items-center flex flex-col">
            <h3 class="xl:text-lg leading-4 font-medium text-gray-900 dark:text-night-100">
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
              <div class="bg-gray-50 dark:bg-night-500 px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" v-if="show_materials"
                        @click="toggle_materials">
                  What's going on?
                </button>
                <button class="mt-1 text-sm text-gray-900 sm:mt-0 dark:text-night-100" v-else @click="toggle_materials">
                  Show materials
                </button>
              </div>
              <div class="bg-white dark:bg-night-700 px-4 py-2 grid grid-cols-12 items-center sm:gap-4 sm:px-6">
                <div class="flex w-10 z-0 self-center items-center" @click="classic = !classic">
                  <div class="w-16 h-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
                       :class="{ 'bg-green-400': classic}">
                    <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
                         :class="{ 'translate-x-4': classic,}"></div>
                  </div>
                </div>
                <div class="z-10 col-span-11 text-sm text-gray-900 dark:text-night-100">Switch back to classic names
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {EQUIP, MATERIAL, STAT, ESSENCE, ITEM, IMMUNITY, DEBUG_STEPS} from '@/forge/enums'
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
      IMMUNITY: IMMUNITY,
      DEBUG_STEPS: DEBUG_STEPS,
      selected_material: MATERIAL.MenosBronze,
      selected_object: EQUIP.Knife,
      itemForged: new ForgedItem([EQUIP.Pendant.value, MATERIAL.MenosBronze.value]),
      /**
       * @type [ITEM]
       */
      history: [],
      recipe: '',
      classic: false,
      debug_step: 0,
      show_materials: true,
      explanation: "You need to select one of the sub-steps below.",
      window_width: 0,
      coins_visible: false,
      stones_visible: false,
      seeds_visible: false,
      produce_visible: false,
      fangs_visible: false,
      eyes_visible: false,
      wings_visible: false,
      misc_visible: false

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
    toggle_materials() {
      this.show_materials = !this.show_materials
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

    step_forge(i) {
      let item = this.itemForged
      const ds = this.debug_step
      item.set_item(i)
      if (ds >= 1) item.init_stat_limits()
      if (ds >= 2) item.sub_init_cards()
      if (ds >= 3) item.material_init()
      if (ds >= 4) item.set_active_world_card()
      if (ds >= 5) item.item_energy()
      if (ds >= 6) item.material_code()
      if (ds >= 7) item.item_code()
      if (ds >= 8) item.push_cards()
      if (ds >= 9) item.activate_cards()
      if (ds >= 10) item.check_type_effects()
      if (ds >= 11) item.increase_essences()
      if (ds >= 12) item.calculate_stats()
    },

    add_item(i) {
      if (i > 0) {
        this.history.splice(this.step, 0, this.find_item_by_val(i))
        this.step++
      }
    },
    rebuild() {
      let i = 0
      this.itemForged = new ForgedItem([this.selected_object.value, this.selected_material.value])
      for (i = 0; i < Math.min(this.history.length, this.step) - 1; i++) {
        this.forge(this.history[i].value)
      }
      if (this.step > 0) {
        if (this.debug_step > 0) {
          this.step_forge(this.history[i].value)
        } else {
          this.forge(this.history[i].value)
        }
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
      const cart = new Map();
      src += this.get_text(this.selected_object)
      src += '\n' + this.get_text(this.selected_material)
      let buffer = ''
      let count = 0
      for (let i = 0; i < this.history.length; i++) {
        if (cart.has(this.get_text(this.history[i]))) {
          cart.set(this.get_text(this.history[i]), cart.get(this.get_text(this.history[i])) + 1)
        } else {
          cart.set(this.get_text(this.history[i]), 1)
        }
        if (buffer === '') {
          buffer = this.get_text(this.history[i])
          count++
        } else if (buffer === this.get_text(this.history[i])) {
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

      src += '\n\n\nShopping Cart\n-------------'
      src += '\n' + this.get_text(this.selected_material) + '\n'
      cart.forEach((val, key) => {src+= '\n' + key.padEnd(20) + ' -> ' + val;})

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
    },
    handleResize() {
      this.window_width = window.innerWidth
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
    debug_step: function (newV) {
      if (newV > DEBUG_STEPS.CALCULATESTATS.value) {
        this.debug_step = DEBUG_STEPS.CALCULATESTATS.value
      } else if (newV < 0) {
        this.debug_step = 0
      } else {
        this.debug_step = newV
      }
      this.rebuild()
    },
    selected_material: function () {
      this.rebuild()
    },
    selected_object: function () {
      this.rebuild()
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--suppress CssUnusedSymbol -->
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

.btnfield40 {
  @apply grid;
  @apply grid-flow-row grid-cols-2;
  @apply sm:grid-flow-row sm:grid-cols-2;
  @apply xl:grid-rows-5 xl:grid-cols-8 xl:grid-flow-col-dense;
}

.btnfield32 {
  @apply grid;
  @apply grid-flow-row grid-cols-2;
  @apply sm:grid-flow-row sm:grid-cols-2;
  @apply xl:grid-rows-4 xl:grid-cols-8 xl:grid-flow-col-dense;
}

.btnfield16 {
  @apply grid;
  @apply grid-flow-row grid-cols-2;
  @apply sm:grid-flow-row sm:grid-cols-2;
  @apply xl:grid-rows-2 xl:grid-cols-8 xl:grid-flow-col;
}

.btnfield8 {
  @apply grid;
  @apply grid-flow-row grid-cols-2;
  @apply sm:grid-flow-row sm:grid-cols-2;
  @apply xl:grid-rows-1 xl:grid-cols-8 xl:grid-flow-col;
}

.highlight-up {
  @apply rounded-full bg-green-300 dark:bg-green-700 dark:text-white px-1;
  min-width: 1.25rem;
}

.highlight-down {
  @apply rounded-full bg-red-300 dark:bg-red-700 dark:text-white px-1;
  min-width: 1.25rem;
}

.highlight-change {
  @apply rounded-full bg-blue-300 dark:bg-blue-900 dark:text-white px-1;
  min-width: 1.25rem;
}

.highlight-sticky {
  @apply rounded-full bg-purple-300 dark:bg-purple-900 dark:text-white px-1;
  min-width: 1.25rem;
}

</style>
