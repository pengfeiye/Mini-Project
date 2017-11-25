module HerosHelper
	WARRIOR_SET = {:level => 1, :atk => 31, :def => 40, :agi => 10, :luk => 30, :wis => 5, :exp => 0}
	ARCHER_SET = {:level => 1, :atk => 40, :def => 25, :agi => 60, :luk => 30, :wis => 15, :exp => 0}
	MAGE_SET = {:level => 1, :atk => 80, :def => 10, :agi => 15, :luk => 30, :wis => 35, :exp => 0}

	def hero_params
		hero_info = params.require(:hero).permit(:name, :job)
		case hero_info[:job]
			when "Warrior"
			  hero_info = hero_info.merge WARRIOR_SET
			when "Archer"
				hero_info = hero_info.merge ARCHER_SET
			when "Mage"
			  hero_info = hero_info.merge MAGE_SET
		end
		return hero_info
	end
end
