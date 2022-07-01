import { FC } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { applyLabelTipsStyle } from "./style"
import { PanelLabelProps } from "./interface"

export const PanelLabel: FC<PanelLabelProps> = (props) => {
  const { labelDesc, labelName, isInList } = props

  return (
    <>
      <Tooltip
        content={labelDesc}
        trigger="hover"
        position="left"
        maxWidth="240px"
        disabled={!labelDesc}
      >
        <span css={applyLabelTipsStyle(isInList, !!labelDesc)}>
          {labelName}
        </span>
      </Tooltip>
    </>
  )
}

PanelLabel.displayName = "PanelLabel"
