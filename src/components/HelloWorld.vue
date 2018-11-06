<template>
  <div class="hello">
    <kendo-grid :data-source="localDataSource"
      :selectable="'multiple cell'">
    </kendo-grid>
    <br/>
    <kendo-spreadsheet ref="spreadsheet">
        <kendo-spreadsheet-sheet :name="'Food Order'">
        </kendo-spreadsheet-sheet>
    </kendo-spreadsheet>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    var spreadsheet = this.$refs.spreadsheet.kendoWidget();
    spreadsheet.element.css("height", "400px");
    spreadsheet.element.css("width", "100%");
    spreadsheet.resize();
  },
  data: function() {
    return {
      localDataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        }
      ]
    };
  }
};
</script>
