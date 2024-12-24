<script setup lang="ts">
// https://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2003

import { ref } from 'vue'

interface IRates {
  numCode?: string
  charCode?: string
  nominal?: string
  name?: string
  value?: string
}

// <NumCode>826</NumCode>
// <CharCode>GBP</CharCode>
// <Nominal>1</Nominal>
// <Name>Фунт стерлингов Соединенного королевства</Name>
// <Value>49,8347</Value>
// <VunitRate>49,8347</VunitRate>

function dtime_nums(e: number) {
  const n = new Date()
  n.setDate(n.getDate() + e)
  return n.toLocaleDateString()
}

const rates = ref<IRates[]>([])
const ratesOld = ref<IRates[]>([])

fetch('https://cors.rosar-l.ru/http://www.cbr.ru/scripts/XML_daily_eng.asp')
  .then((response) => response.text()) // Достаем текст RSS-канала
  .then((str) => new DOMParser().parseFromString(str, 'text/xml')) // Преобразуем текст в XML
  .then((data) => {
    const items = data.querySelectorAll('Valute') // Ищем все элементы 'item'
    items.forEach((el) => {
      rates.value.push({
        numCode: el.querySelector('NumCode')?.textContent || '',
        charCode: el.querySelector('CharCode')?.textContent || '',
        nominal: el.querySelector('Nominal')?.textContent || '',
        name: el.querySelector('Name')?.textContent || '',
        value: el.querySelector('Value')?.textContent || '',
      })
    })
  })

fetch('https://cors.rosar-l.ru/http://www.cbr.ru/scripts/XML_daily_eng.asp?date_req='+dtime_nums(-1).split(".").join("/"))
  .then((response) => response.text()) // Достаем текст RSS-канала
  .then((str) => new DOMParser().parseFromString(str, 'text/xml')) // Преобразуем текст в XML
  .then((data) => {
    const items = data.querySelectorAll('Valute') // Ищем все элементы 'item'
    items.forEach((el) => {
      ratesOld.value.push({
        numCode: el.querySelector('NumCode')?.textContent || '',
        charCode: el.querySelector('CharCode')?.textContent || '',
        nominal: el.querySelector('Nominal')?.textContent || '',
        name: el.querySelector('Name')?.textContent || '',
        value: el.querySelector('Value')?.textContent || '',
      })
    })
  })

</script>

<template>
  <h1 class="page-title">Курсы валют</h1>
    <div class="container rates-page">
      <div >
        <h1>Курс валют ЦБ РФ на сегодня</h1>

        <table class="rates_today">
          <thead>
          <tr>
            <th>
              <span class="rates__kd">Код</span>
            </th>
            <th>
              <span class="rates__val">Валюта</span>
            </th>
            <th>
              <span class="rates__val">ЦБ РФ на {{dtime_nums(0)}}</span>
            </th>
            <th>
              <span class="rates__val">ЦБ РФ на {{dtime_nums(-1)}}</span>
            </th>
            <th>
              <span class="rates__val">ММВБ</span>
            </th>
            <th>
              <span class="rates__val">Форекс</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="rate in rates.filter(el => el.numCode === '840' || el.numCode === '978')" :key="rate.numCode">
            <td>
              <span class="rates__str">{{rate.charCode}}</span>
            </td>

            <td>
              <span class="rates__str2">{{rate.name}}</span>
            </td>
            <td>
              <span class="rates__str3">{{rate.value}}</span>
            </td>
            <td>
              <span class="rates__str4">{{ratesOld.find(el => rate.numCode == el.numCode)?.value}}</span>
            </td>
            <td>
              <span class="rates__str4">-</span>
            </td>

            <td>
              <span class="rates__str4">-</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: 30px">
        <h1>Все валюты</h1>

        <table class="rates_all">
          <thead>
          <tr>
            <th>
              <span class="rates__kd">Код</span>
            </th>
            <th>
              <span class="rates__val">Номинал</span>
            </th>
            <th>
              <span class="rates__val">Валюта</span>
            </th>
            <th>
              <span class="rates__val">Курс ЦБ</span>
            </th>
            <th>
              <span class="rates__val">Изменения</span>
            </th>
            <th>
              <span class="rates__val">%</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(rate, idx) in rates" :key="idx">
            <td>
              <span class="rates__sto">{{rate.charCode}}</span>
            </td>

            <td>
              <span class="rates__sto2">{{rate.nominal}}</span>
            </td>
            <td>
              <span class="rates__sto3">{{rate.name}}</span>
            </td>
            <td>
              <span class="rates__sto4">{{rate.value}}</span>
            </td>
            <td>
              -
            </td>
            <td>
              -
            </td>
          </tr>


          </tbody>
        </table>
      </div>
    </div>
</template>

<style lang="css" scoped>
.rates-page {
  margin-top: 30px;
  margin-bottom: 30px;
}
.rates__down,
.rates__up {
  font-weight: 500;
  margin-left: 5px;
}

.rates__down {
  color: red;
}

.rates__up {
  color: green;
}

.rates_today {
  margin-top: 15px;
  width: 100%;
}

.rates_today thead th {
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
}

.rates_today tbody td {
  padding: 20px;
}

.rates_today tbody {
  box-shadow: 0 0 2px rgba(0, 0, 0, 1);

  box-shadow: 0 5px 30px -10px rgba(49, 94, 251, 0.3);
}
.rates_all {
  margin-top: 15px;
  width: 100%;
}
.rates_all thead th {
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
}
.rates_all thead td {
  padding: 20px;
}
.rates_all tbody {

  box-shadow: 0 5px 30px -10px rgba(49, 94, 251, 0.3);
}

.rates_all tbody td {
  padding: 20px;
}
.rates__kd {
  color: #777e98;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  padding: 0 0 15px;
  text-align: left;
}
.rates__val {
  color: #777e98;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  padding: 0 0 15px;
  text-align: left;
}
.rates__str {
  color: #343b4c;
  font-size: 21px;
  font-weight: 700;
  line-height: 30px;
}
.rates__str2 {
  color: #343b4c;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  transition:
    color 0.2s,
    background-color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
}
.rates__str3 {
  color: #343b4c;
  font-size: 21px;
  font-weight: 700;
  line-height: 30px;
  margin-right: 10px;
}
.rates__str4 {
  color: #343b4c;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
}
.rates__sto {
  font-size: 15px;
  font-weight: 500;
  color: #343b4c;
}
.rates__sto2 {
  color: #777e98;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: right;
  width: 44px;
}
.rates__sto3 {
  color: #343b4c;
  display: block;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  max-height: 40px;
  max-width: 289px;
  text-align: left;
}
.rates__sto4 {
  color: #343b4c;
  font-size: 15px;
  line-height: 20px;
  font-weight: 650;
}
</style>
