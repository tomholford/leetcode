require_relative '../../spec/spec_helper'
require_relative '../move_zeroes'

describe MoveZeroes do
  let(:instance) { described_class.new(nums) }

  describe '#run' do
    subject { instance.run }

    context 'first leetcode test case' do
      let(:nums) { [0,1,0,3,12] }

      it 'moves the zeroes to the end' do
        expect(subject).to eq([1,3,12,0,0])
      end
    end

    context 'second leetcode test case' do
      let(:nums) { [0] }

      it 'moves the zeroes to the end' do
        expect(subject).to eq([0])
      end
    end

    context 'third leetcode test case' do
      let(:nums) { [0, 1] }

      it 'moves the zeroes to the end' do
        expect(subject).to eq([1, 0])
      end
    end

    context 'fourth leetcode test case' do
      let(:nums) { [0, 0, 1] }

      it 'moves the zeroes to the end' do
        expect(subject).to eq([1, 0, 0])
      end
    end
  end
end
