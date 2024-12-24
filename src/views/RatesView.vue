<script setup lang="ts"></script>

<template>
  <div class="container">
    <div>
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
              <span class="rates__val">ЦБ РФ на 20.12</span>
            </th>
            <th>
              <span class="rates__val">ЦБ РФ на 19.12</span>
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
          <tr>
            <td>
              <span class="rates__str">USD</span>
            </td>

            <td>
              <span class="rates__str2">Доллар США</span>
            </td>
            <td>
              <span class="rates__str3">103.4207</span>
              <span class="rates__up">+0.6444</span>
            </td>
            <td>
              <span class="rates__str4">102.7763</span>
              <span class="rates__down">-0.5507</span>
            </td>
            <td>
              <span class="rates__str4">89,1025</span>
            </td>

            <td>
              <span class="rates__str4">-</span>
            </td>
          </tr>

          <tr>
            <td>
              <span class="rates__str">EUR</span>
            </td>
            <td>
              <span class="rates__str2">Евро</span>
            </td>
            <td>
              <span class="rates__str3">107.9576</span>
              <span class="rates__down">-0.2216</span>
            </td>
            <td>
              <span class="rates__str4">108.5083</span>
              <span class="rates__up">+0.1639</span>
            </td>
            <td>
              <span class="rates__str4">95.6200</span>
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
          <tr>
            <td>
              <span class="rates__sto">AMD</span>
            </td>

            <td>
              <span class="rates__sto2">1000</span>
            </td>
            <td>
              <span class="rates__sto3">Армянский драм</span>
            </td>
            <td>
              <span class="rates__sto4">261.8840</span>
            </td>
            <td>
              <span class="rates__up">+1.4400</span>
            </td>
            <td>
              <span class="rates__up">+0.55%</span>
            </td>
          </tr>

          <tr>
            <td>
              <span class="rates__sto">BYN</span>
            </td>
            <td>
              <span class="rates__sto2">1</span>
            </td>
            <td>
              <span class="rates__sto3">Белорусский рубль</span>
            </td>
            <td>
              <span class="rates__sto4">29.7871</span>
            </td>
            <td>
              <span class="rates__up">+0.1805</span>
            </td>
            <td>
              <span class="rates__up">+0.61%</span>
            </td>
          </tr>

          <tr>
            <td>
              <span class="rates__sto">AUD</span>
            </td>
            <td>
              <span class="rates__sto2">1</span>
            </td>
            <td>
              <span class="rates__sto3">Австралийский доллар</span>
            </td>
            <td>
              <span class="rates__sto4">64.3897</span>
            </td>
            <td>
              <span class="rates__down">-0.4930</span>
            </td>
            <td>
              <span class="rates__down">-0.76%</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="css" scoped>
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
  box-shadow: 0 0 2px rgba(0, 0, 0, 1);

  box-shadow: 0 5px 30px -10px rgba(49, 94, 251, 0.3);
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
  font-size: 15 px;
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
