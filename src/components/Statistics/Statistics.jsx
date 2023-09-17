import {StatisticInfo, Items, Statistic, StatisticTitle,  LabelText, PercentageText} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
return <Statistic>
 {title && <StatisticTitle>{title}</StatisticTitle>}
  <StatisticInfo>
    {stats.map(({id, label, percentage}) => (
      <Items key={id} label={label} class="item">
      <LabelText>{label}</ LabelText>
      <PercentageText>{percentage}%</PercentageText>
    </Items>
    ))} 
  </StatisticInfo>
</Statistic>
}