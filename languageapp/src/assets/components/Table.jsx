import "./Table.scss";

const Table = () => {
  return <div className="main_table">

<table class="table">
	<thead>
		<tr>
			<th>English</th>
			<th>Transcription</th>
			<th>Translate</th>
			<th>Кнопки</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>apple</td>
			<td>-</td>
			<td>яблоко</td>
      <td>кнопка "редактировать"</td>
      <td>кнопка "удалить"</td>


		</tr>
    <tr>
			<td>orange</td>
			<td>-</td>
			<td>апельсин</td>
      <td>кнопка "редактировать"</td>

		</tr>

		
	</tbody>


</table>


  </div>;
 }

 export default Table;